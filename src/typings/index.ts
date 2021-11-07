
export type MaybeError = "empty source" 

export type AST<A, B> = [A, B]

export type Maybe<A, B> = AST<A, B> | MaybeError

export type ParserFunc<A> = <B>(source: B) => Maybe<A, B>

export type Parser<A> = <B>(source: B) => Maybe<A, B>

/** 解构出 Parser */
export type PickParser<A> = A extends Parser<infer B> ? Parser<B> : never

/** 解构出 Parser 的泛型 */
export type PickParserT<A> = A extends Parser<infer B> ? B : never


















