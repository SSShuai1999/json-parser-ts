import { applyAllI } from "./function";
import { MAYBE_ERROR } from "./utils/constants";

import { Maybe
       , Parser
       , PickParserT
       , generatorFunc
       , PickFuncParameter
       , PickFuncParameterByIdx
       , FuncType
       , PickFuncRet } from "./typings";

export const first = 
    /** ↑ 类型签名 ↓ 实现 */
    <B>(source: B): Maybe<string, B> => {
        if (!source) return 'empty source';

        return [source[0], (source as any).slice(1)];
    }

export const inject: <A>(value: A) => Parser<A> =
    /** ↑ 类型签名 ↓ 实现 */
    (value) => (source) => {
        return [value, source];
    };

export const isFailed: (result: unknown) => boolean =
    /** ↑ 类型签名 ↓ 实现 */
    (result): result is string => typeof result === "string";

export const map: 
    <A extends Parser<any>, B extends A, C>
    (parser: B, f: generatorFunc<PickParserT<B>, C>)
    => Parser<PickFuncRet<typeof f>> = 
    /** ↑ 类型签名 ↓ 实现 */
    (parser, f) => (source) => {
        const result = parser(source)
        
        if (isFailed(result)) return result
        
        const [data, rest_source] = result

        return [f(data), rest_source] as any;
    }

export const apply:
    <A extends Parser<any>, B extends A, C extends A>
    (parserFn: B, parserArg: Parser<PickFuncParameter<PickParserT<B>>>)
    => Parser<PickFuncRet<PickParserT<B>>> = 
    /** ↑ 类型签名 ↓ 实现 */
    (parserFn, parserArg) => (source) => {
        const resultFn = parserFn(source)

        if (isFailed(resultFn)) return resultFn

        const [fn, rest_source_fn] = resultFn
        const resultArg = parserArg(rest_source_fn)

        if (isFailed(resultArg)) return resultArg

        const [arg, rest_source_arg] = resultArg

        return [fn(arg), rest_source_arg] as any;
    }

/**
 * applyAll 的类型推断可以支持 15 层，当然想扩展也可以。
 */

export const applyAll = applyAllI

// e.g.
type Person = {
    name: string,
    age: number
}

const p1: Person = { name: "松鼠", age: 22 };
applyAllI(inject(((p: Person) => p)), inject(p1)) // -> : Parser<Person>

export const satisfy: <A extends FuncType<boolean, string>, B extends A>
    (predicate: B) => Parser<PickFuncParameterByIdx<B, 1>> = 
    /** ↑ 类型签名 ↓ 实现 */
    (predicate) => source => {
        const result = first(source);

        if (isFailed(result)) return result;
        
        const [char, rest_source] = result;

        if (!predicate(char)) return `Unexpect char ${char}`;

        return [char, rest_source] as any;
    }

export const digit: Parser<string> = 
    /** ↑ 类型签名 ↓ 实现 */
    satisfy((c: string) => c >= '0' && c <= '9'); 

export const lower: Parser<string> = 
    /** ↑ 类型签名 ↓ 实现 */
    satisfy((c: string) => c >= 'a' && c <= 'z'); 

export const upper: Parser<string> = 
    /** ↑ 类型签名 ↓ 实现 */
    satisfy((c: string) => c >= 'A' && c <= 'Z'); 

export const char: (target: string) => Parser<string> = 
    /** ↑ 类型签名 ↓ 实现 */
    (target) => satisfy((c) => c === target);

export const not: (x: string) => Parser<string> = 
    /** ↑ 类型签名 ↓ 实现 */
    (x) => satisfy((value) => value !== x);

export const either: <A extends Parser<any>, B extends A, C extends A>
                    (parserA: B, parserB: C)
                    => B | C = 
        /** ↑ 类型签名 ↓ 实现 */
        // @ts-ignore
        (parserA, parserB) => (source) => {
            const resultA = parserA(source);

            if (!isFailed(resultA)) return resultA;

            return parserB(source);
        }

export const oneOf:
    (...args: Parser<any>[])
    => Parser<string> = 
    /** ↑ 类型签名 ↓ 实现 */
    (...args) => args.reduce(either);

export const whiteSpace: Parser<string> = 
    oneOf(char(' '), char('\s'), char('\n'), char('\t'));

export const many: (parser: Parser<string>) => Parser<[]> | Parser<string> =
    /** ↑ 类型签名 ↓ 实现 */
    parser => {
        const concat = applyAll(
            inject(item => list => [item, ...list]),
            parser,
            source => many(parser)(source)
        )

        return either(concat, inject([])) as any;
    }

export const many1: (parser: Parser<string>) => Parser<string[]> = 
    /** ↑ 类型签名 ↓ 实现 */
    (parser) => (source) => {
        const result = many(parser)(source);

        if (isFailed(result)) {
            return result;
        }

        const [list, rest_source] = result;

        if (list.length === 0) {
            return `At least match once`;
        } else {
            return [list, rest_source] as any;
        }
    }

export const string: (str: string) => Parser<string> = 
    /** ↑ 类型签名 ↓ 实现 */
    str => {
        if (str.length === 0) {
            return inject("");
        } else {
            const f = inject((x: string) => (xs: string) => x + xs);
            const arg1 = char(str[0]);
            const arg2 = string(str.slice(1));
            
            return applyAll(f, arg1, arg2);
        }
    }

export const letter: Parser<string> = 
    /** ↑ 类型签名 ↓ 实现 */
    either(lower, upper);

export const positiveInteger: Parser<number> =
    /** ↑ 类型签名 ↓ 实现 */
    map(many1(digit), (list) => Number(list.join('')));

const negativeIntegerArg1 = inject((_: unknown) => x => -x);

export const negativeInteger: Parser<number> = 
    /** ↑ 类型签名 ↓ 实现 */
    applyAll(negativeIntegerArg1, char('-'), positiveInteger);

export const integer: Parser<number> = 
    /** ↑ 类型签名 ↓ 实现 */
    either(positiveInteger, negativeInteger);

const positiveFloatArg1 = inject((a) => (b) => (c) => Number(a + b + c));

const positiveFloatArg2 = map(many1(digit), (list) => list.join(''));

const positiveFloatArg3 = char('.');

const positiveFloatArg4 = map(many1(digit), (list) => list.join(''));

export const positiveFloat: Parser<number> =
    /** ↑ 类型签名 ↓ 实现 */
    applyAll(
        positiveFloatArg1,
        positiveFloatArg2,
        positiveFloatArg3,
        positiveFloatArg4,
    )

const negativeFloatArg1 = inject(_ => x => -x);

export const negativeFloat: Parser<number> =
    /** ↑ 类型签名 ↓ 实现 */
    applyAll(negativeFloatArg1, char('-'), positiveFloat);

export const float: Parser<number> = 
    /** ↑ 类型签名 ↓ 实现 */
    either(positiveFloat, negativeInteger)

const ignoreFirstArg1 = inject(_ => value => value);

export const ignoreFirst: <A extends Parser<any>, B extends A, C extends A>
    (first: B, second: C) => Parser<PickParserT<C>> = 
    /** ↑ 类型签名 ↓ 实现 */
    (first, second) => applyAll(ignoreFirstArg1, first, second);

export const separateBy: <A extends Parser<string>, B extends A, C extends A>
    (parser: B, separator: C) => Parser<string[]> =
    /** ↑ 类型签名 ↓ 实现 */
    (parser, separator) => {
        const separateByArg1 = inject(item => list => [item, ...list]);
        const separateByArg2 = many(ignoreFirst(separator, parser));

        return applyAll(
            separateByArg1,
            parser,
            separateByArg2
        );
    }

const bracketArg1 = inject(_1 => x => _2 => x);

export const bracket: 
    <A extends Parser<any>, B extends A, C extends A, D extends A>
    (open: B, parser: C, close: D) => Parser<PickParserT<C>> = 
    /** ↑ 类型签名 ↓ 实现 */
    (open, parser, close) =>
    applyAll(bracketArg1, open, parser, close);

const aroundByArg1 = inject(_1 => x => _2 => x);

export const aroundBy: 
    <A extends Parser<any>, B extends A, C extends A>
    (parser: B, surround: C) => Parser<string> = 
    /** ↑ 类型签名 ↓ 实现 */
    (parser, surround) => 
    applyAll(aroundByArg1, many(surround), parser, many(surround));

export const aroundBySpace: 
    <A extends Parser<any>, B extends A>
    (parser: B) => Parser<string> = 
    /** ↑ 类型签名 ↓ 实现 */
    parser => 
    aroundBy(parser, whiteSpace);


export const number: Parser<number> = 
    /** ↑ 类型签名 ↓ 实现 */
    either(float, integer)

export const jNumber: Parser<number> = 
    /** ↑ 类型签名 ↓ 实现 */
    number;

export const jNull: Parser<null> = map(string("null"), () => null);

export const jBoolean: Parser<boolean> = 
    /** ↑ 类型签名 ↓ 实现 */
    map(
        either(string("false"), string("true")),
        result => result === "true"
    );

export const jString: Parser<string> = 
    /** ↑ 类型签名 ↓ 实现 */
    map(
        bracket(char(`"`), many(not(`"`)), char(`"`)),
        (list: any) => list.join("")
    )
    
export const jKey: Parser<string> = jString

export const jValue: Parser<null | boolean | number | string | any[] | Object>
    /** ↑ 类型签名 ↓ 实现 */
    = source => {
    return oneOf(jNull, jBoolean, jNumber, jString, jArray, jObject)(source) 
}

export const jArray: Parser<any[]> = 
    /** ↑ 类型签名 ↓ 实现 */
    bracket(
        aroundBySpace(char('[')),
        separateBy(aroundBySpace(jValue), aroundBySpace(char(','))),
        aroundBySpace(char(']')),
    )

const jPairArg1 = inject(key => _ => value => [key, value]);

export const jPair: Parser<string> = 
    /** ↑ 类型签名 ↓ 实现 */
    applyAll(
        jPairArg1,
        jKey,
        aroundBySpace(char(':')),
        jValue
    ) as any

export const jPairs: Parser<string[]> = 
    /** ↑ 类型签名 ↓ 实现 */
    separateBy(jPair, aroundBySpace(char(',')))

export const jObject: Parser<Object> = 
    /** ↑ 类型签名 ↓ 实现 */
    map(
        bracket(
            aroundBySpace(char('{')),
            either(aroundBySpace(jPairs), inject([])),
            aroundBySpace(char('}')),
        ),
        (entries: any[]) => 
            entries.reduce((obj, [key, value]) => 
                ({ ...obj, [key]: value }), {})
    )

