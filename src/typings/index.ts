
export type AtLeastOnceError = `At least match once`

export type MaybeError = "empty source" | `Unexpect char ${any}` | AtLeastOnceError

export type AST<A, B> = [A, B]

export type Maybe<A, B> = AST<A, B> | MaybeError

export type ParserFunc<A> = (source: string) => Maybe<A, string>

export type Parser<A> = (source: string) => Maybe<A, string>

/** 解构出 Parser */
export type PickParser<A> = A extends Parser<infer B> ? Parser<B> : never

/** 解构出 Parser 的泛型 */
export type PickParserT<A> = A extends Parser<infer B> ? B : never

/** 传入具体的参数类型，构造一个函数 */
export type generatorFunc<A, B> = (arg: A) => B

/** 取出函数的多个参数类型 */
export type PickFuncParameters<A extends Function> = A extends (...args: infer B) => any ? B : never 

/** 取出函数第一个参数类型 */
export type PickFuncParameter<A extends Function> = A extends (arg: infer B) => any ? B : never 

/** 取出函数对应的第 N 个参数类型
 * 例子：const fn = (a: number) => (b: string) => (c: boolean) => boolean
 * PickFuncParameterByIdx<A, 1> -> number 
 * PickFuncParameterByIdx<A, 2> -> string 
 * PickFuncParameterByIdx<A, 1> -> boolean 
 */
export type PickFuncParameterByIdx
            <A extends Function,
             M extends Number = 1,
             I extends Number[] = [0]> = 
    A extends (arg: infer C) => infer B ? 
                                I['length'] extends M ? 
                                    C : B extends Function ? 
                                       PickFuncParameterByIdx<B, M, [...I, 0]> : never
                                : never 

/** 取出函数的返回值类型 */
export type PickFuncRet<A extends Function> = 
    A extends (...args: any) => infer B ? B extends Function ? PickFuncRet<B> : B : never 

export type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

export type XOR<T, U> = T | U extends object ? 
                              (Without<T, U> & U) | (Without<U, T> & T)
                              : T | U;

// 返回类型为具体值的函数
export type FuncType<A extends boolean | string | number, B extends unknown = unknown[]> = {
    "boolean": B extends unknown[] ? (...args: B) => boolean : (args: B) => boolean,
    "string" : B extends unknown[] ? (...args: B) => string : (...args: B[]) => string,
    "number" : B extends unknown[] ? (...args: B) => number : (...args: B[]) => number,
}[A extends boolean ? 
        "boolean" : 
            A extends string ? 
                "string" : 
                    A extends number ? 
                        "number" 
                            : never]
















