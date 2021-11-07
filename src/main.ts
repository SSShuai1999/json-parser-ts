import { applyAllI } from "./function";
import { Maybe, MaybeError, Parser, PickParser, PickParserT } from "./typings";
import { generatorFunc, PickFuncParameter, PickFuncParameters, PickFuncRet } from "./typings/utils";

export const error: MaybeError = "empty source"

export const first = 
    /** ↑ 类型签名 ↓ 实现 */
    <B>(source: B): Maybe<string, B> => {
        if (typeof source === "string" && source !== "") {
            return [source[0], source.slice(1)] as any;
        } else {
            return error;
        }
    }

export const inject: <A>(value: A) => Parser<A> =
    /** ↑ 类型签名 ↓ 实现 */
    (value) => (source) => {
        if (typeof source === "string" && source !== "") {
            return [value, source]
        } else {
            return error;
        }
    };

export const isFailed: (result: unknown) => boolean =
    /** ↑ 类型签名 ↓ 实现 */
    (result): result is string => typeof result === "string";

export const map: <A extends Parser<any>, B extends A, C>
                    (parser: B, f: Parser<generatorFunc<PickParserT<B>, C>>)
                    => Parser<PickFuncRet<PickParserT<typeof f>>> = 
    /** ↑ 类型签名 ↓ 实现 */
    (parser, f) => (source) => {
        const result = parser(source);

        if (isFailed(result)) {
            return result
        } else {
            const [data, rest_source] = result;
            return [f(data), rest_source] as any;
        }
    }

export const apply: <A extends Parser<any>, B extends A, C extends A>
            (parserFn: B, parserArg: Parser<PickFuncParameter<PickParserT<B>>>)
            => Parser<PickFuncRet<PickParserT<B>>> = 
    /** ↑ 类型签名 ↓ 实现 */
    (parserFn, parserArg) => (source) => {
    const resultFn = parserFn(source);

    if (isFailed(resultFn)) {
        return resultFn;
    }

    const [fn, rest_source_fn] = resultFn;
    const resultArg = parserArg(rest_source_fn);

    if (isFailed(resultArg)) {
        return resultArg;
    }

    const [arg, rest_source_arg] = resultArg;

    return [fn(arg), rest_source_arg];
}

/**
 * applyAll 的类型推断可以支持 15 层，当然想扩展也可以。
 * e.g.
 */

export const applyAll = applyAllI



