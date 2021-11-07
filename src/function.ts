import { apply, inject } from "./main";
import { Parser, PickParserT } from "./typings";
import { PickFuncParameterByIdx, PickFuncRet } from "./typings/utils";

export function applyAllI
<A extends Parser<any>,
    B extends A,
    C extends A>
(fn: B,
    a: Parser<PickFuncParameterByIdx<PickParserT<B>, 1>>): 
Parser<PickFuncRet<PickParserT<typeof fn>>>

export function applyAllI
<A extends Parser<any>,
    B extends A>
(fn: B,
    a: Parser<PickFuncParameterByIdx<PickParserT<B>, 1>>,
    b: Parser<PickFuncParameterByIdx<PickParserT<B>, 2>>):
Parser<PickFuncRet<PickParserT<typeof fn>>>

export function applyAllI
<A extends Parser<any>,
    B extends A>
(fn: B,
    a: Parser<PickFuncParameterByIdx<PickParserT<B>, 1>>,
    b: Parser<PickFuncParameterByIdx<PickParserT<B>, 2>>,
    c: Parser<PickFuncParameterByIdx<PickParserT<B>, 3>>):
Parser<PickFuncRet<PickParserT<typeof fn>>>

export function applyAllI
<A extends Parser<any>,
    B extends A>
(fn: B,
    a: Parser<PickFuncParameterByIdx<PickParserT<B>, 1>>,
    b: Parser<PickFuncParameterByIdx<PickParserT<B>, 2>>,
    c: Parser<PickFuncParameterByIdx<PickParserT<B>, 3>>,
    d: Parser<PickFuncParameterByIdx<PickParserT<B>, 4>>):
Parser<PickFuncRet<PickParserT<typeof fn>>>

export function applyAllI
<A extends Parser<any>,
    B extends A>
(fn: B,
    a: Parser<PickFuncParameterByIdx<PickParserT<B>, 1>>,
    b: Parser<PickFuncParameterByIdx<PickParserT<B>, 2>>,
    c: Parser<PickFuncParameterByIdx<PickParserT<B>, 3>>,
    d: Parser<PickFuncParameterByIdx<PickParserT<B>, 4>>,
    e: Parser<PickFuncParameterByIdx<PickParserT<B>, 5>>):
Parser<PickFuncRet<PickParserT<typeof fn>>>

export function applyAllI
<A extends Parser<any>,
    B extends A>
(fn: B,
    a: Parser<PickFuncParameterByIdx<PickParserT<B>, 1>>,
    b: Parser<PickFuncParameterByIdx<PickParserT<B>, 2>>,
    c: Parser<PickFuncParameterByIdx<PickParserT<B>, 3>>,
    d: Parser<PickFuncParameterByIdx<PickParserT<B>, 4>>,
    e: Parser<PickFuncParameterByIdx<PickParserT<B>, 5>>,
    f: Parser<PickFuncParameterByIdx<PickParserT<B>, 6>>):
Parser<PickFuncRet<PickParserT<typeof fn>>>

export function applyAllI
<A extends Parser<any>,
    B extends A>
(fn: B,
    a: Parser<PickFuncParameterByIdx<PickParserT<B>, 1>>,
    b: Parser<PickFuncParameterByIdx<PickParserT<B>, 2>>,
    c: Parser<PickFuncParameterByIdx<PickParserT<B>, 3>>,
    d: Parser<PickFuncParameterByIdx<PickParserT<B>, 4>>,
    e: Parser<PickFuncParameterByIdx<PickParserT<B>, 5>>,
    f: Parser<PickFuncParameterByIdx<PickParserT<B>, 6>>,
    g: Parser<PickFuncParameterByIdx<PickParserT<B>, 7>>):
Parser<PickFuncRet<PickParserT<typeof fn>>>

export function applyAllI
<A extends Parser<any>,
    B extends A>
(fn: B,
    a: Parser<PickFuncParameterByIdx<PickParserT<B>, 1>>,
    b: Parser<PickFuncParameterByIdx<PickParserT<B>, 2>>,
    c: Parser<PickFuncParameterByIdx<PickParserT<B>, 3>>,
    d: Parser<PickFuncParameterByIdx<PickParserT<B>, 4>>,
    e: Parser<PickFuncParameterByIdx<PickParserT<B>, 5>>,
    f: Parser<PickFuncParameterByIdx<PickParserT<B>, 6>>,
    g: Parser<PickFuncParameterByIdx<PickParserT<B>, 7>>,
    h: Parser<PickFuncParameterByIdx<PickParserT<B>, 8>>):
Parser<PickFuncRet<PickParserT<typeof fn>>>

export function applyAllI
<A extends Parser<any>,
    B extends A>
(fn: B,
    a: Parser<PickFuncParameterByIdx<PickParserT<B>, 1>>,
    b: Parser<PickFuncParameterByIdx<PickParserT<B>, 2>>,
    c: Parser<PickFuncParameterByIdx<PickParserT<B>, 3>>,
    d: Parser<PickFuncParameterByIdx<PickParserT<B>, 4>>,
    e: Parser<PickFuncParameterByIdx<PickParserT<B>, 5>>,
    f: Parser<PickFuncParameterByIdx<PickParserT<B>, 6>>,
    g: Parser<PickFuncParameterByIdx<PickParserT<B>, 7>>,
    h: Parser<PickFuncParameterByIdx<PickParserT<B>, 8>>,
    i: Parser<PickFuncParameterByIdx<PickParserT<B>, 9>>):
Parser<PickFuncRet<PickParserT<typeof fn>>>

export function applyAllI
<A extends Parser<any>,
    B extends A>
(fn: B,
    a: Parser<PickFuncParameterByIdx<PickParserT<B>, 1>>,
    b: Parser<PickFuncParameterByIdx<PickParserT<B>, 2>>,
    c: Parser<PickFuncParameterByIdx<PickParserT<B>, 3>>,
    d: Parser<PickFuncParameterByIdx<PickParserT<B>, 4>>,
    e: Parser<PickFuncParameterByIdx<PickParserT<B>, 5>>,
    f: Parser<PickFuncParameterByIdx<PickParserT<B>, 6>>,
    g: Parser<PickFuncParameterByIdx<PickParserT<B>, 7>>,
    h: Parser<PickFuncParameterByIdx<PickParserT<B>, 8>>,
    i: Parser<PickFuncParameterByIdx<PickParserT<B>, 9>>,
    j: Parser<PickFuncParameterByIdx<PickParserT<B>, 10>>):
Parser<PickFuncRet<PickParserT<typeof fn>>>

export function applyAllI
<A extends Parser<any>,
    B extends A>
(fn: B,
    a: Parser<PickFuncParameterByIdx<PickParserT<B>, 1>>,
    b: Parser<PickFuncParameterByIdx<PickParserT<B>, 2>>,
    c: Parser<PickFuncParameterByIdx<PickParserT<B>, 3>>,
    d: Parser<PickFuncParameterByIdx<PickParserT<B>, 4>>,
    e: Parser<PickFuncParameterByIdx<PickParserT<B>, 5>>,
    f: Parser<PickFuncParameterByIdx<PickParserT<B>, 6>>,
    g: Parser<PickFuncParameterByIdx<PickParserT<B>, 7>>,
    h: Parser<PickFuncParameterByIdx<PickParserT<B>, 8>>,
    i: Parser<PickFuncParameterByIdx<PickParserT<B>, 9>>,
    j: Parser<PickFuncParameterByIdx<PickParserT<B>, 10>>,
    k: Parser<PickFuncParameterByIdx<PickParserT<B>, 11>>):
Parser<PickFuncRet<PickParserT<typeof fn>>>

export function applyAllI
<A extends Parser<any>,
    B extends A>
(fn: B,
    a: Parser<PickFuncParameterByIdx<PickParserT<B>, 1>>,
    b: Parser<PickFuncParameterByIdx<PickParserT<B>, 2>>,
    c: Parser<PickFuncParameterByIdx<PickParserT<B>, 3>>,
    d: Parser<PickFuncParameterByIdx<PickParserT<B>, 4>>,
    e: Parser<PickFuncParameterByIdx<PickParserT<B>, 5>>,
    f: Parser<PickFuncParameterByIdx<PickParserT<B>, 6>>,
    g: Parser<PickFuncParameterByIdx<PickParserT<B>, 7>>,
    h: Parser<PickFuncParameterByIdx<PickParserT<B>, 8>>,
    i: Parser<PickFuncParameterByIdx<PickParserT<B>, 9>>,
    j: Parser<PickFuncParameterByIdx<PickParserT<B>, 10>>,
    k: Parser<PickFuncParameterByIdx<PickParserT<B>, 11>>,
    l: Parser<PickFuncParameterByIdx<PickParserT<B>, 12>>):
Parser<PickFuncRet<PickParserT<typeof fn>>>

export function applyAllI
<A extends Parser<any>,
    B extends A>
(fn: B,
    a: Parser<PickFuncParameterByIdx<PickParserT<B>, 1>>,
    b: Parser<PickFuncParameterByIdx<PickParserT<B>, 2>>,
    c: Parser<PickFuncParameterByIdx<PickParserT<B>, 3>>,
    d: Parser<PickFuncParameterByIdx<PickParserT<B>, 4>>,
    e: Parser<PickFuncParameterByIdx<PickParserT<B>, 5>>,
    f: Parser<PickFuncParameterByIdx<PickParserT<B>, 6>>,
    g: Parser<PickFuncParameterByIdx<PickParserT<B>, 7>>,
    h: Parser<PickFuncParameterByIdx<PickParserT<B>, 8>>,
    i: Parser<PickFuncParameterByIdx<PickParserT<B>, 9>>,
    j: Parser<PickFuncParameterByIdx<PickParserT<B>, 10>>,
    k: Parser<PickFuncParameterByIdx<PickParserT<B>, 11>>,
    l: Parser<PickFuncParameterByIdx<PickParserT<B>, 12>>,
    m: Parser<PickFuncParameterByIdx<PickParserT<B>, 13>>):
Parser<PickFuncRet<PickParserT<typeof fn>>>

export function applyAllI
<A extends Parser<any>,
    B extends A>
(fn: B,
    a: Parser<PickFuncParameterByIdx<PickParserT<B>, 1>>,
    b: Parser<PickFuncParameterByIdx<PickParserT<B>, 2>>,
    c: Parser<PickFuncParameterByIdx<PickParserT<B>, 3>>,
    d: Parser<PickFuncParameterByIdx<PickParserT<B>, 4>>,
    e: Parser<PickFuncParameterByIdx<PickParserT<B>, 5>>,
    f: Parser<PickFuncParameterByIdx<PickParserT<B>, 6>>,
    g: Parser<PickFuncParameterByIdx<PickParserT<B>, 7>>,
    h: Parser<PickFuncParameterByIdx<PickParserT<B>, 8>>,
    i: Parser<PickFuncParameterByIdx<PickParserT<B>, 9>>,
    j: Parser<PickFuncParameterByIdx<PickParserT<B>, 10>>,
    k: Parser<PickFuncParameterByIdx<PickParserT<B>, 11>>,
    l: Parser<PickFuncParameterByIdx<PickParserT<B>, 12>>,
    m: Parser<PickFuncParameterByIdx<PickParserT<B>, 13>>,
    n: Parser<PickFuncParameterByIdx<PickParserT<B>, 14>>):
Parser<PickFuncRet<PickParserT<typeof fn>>>

export function applyAllI(...args) {
    return args.reduce(apply)
}

/** e.g. */

type Person = {
    name: string,
    age: number
}

const p1: Person = { name: "松鼠", age: 22 };
const res = applyAllI(inject(((p: Person) => p)), inject(p1))

console.log(res) // -> : Parser<Person>