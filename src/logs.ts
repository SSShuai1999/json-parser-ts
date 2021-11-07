import { jArray, jNumber, jObject, jString, jValue } from "./core";

console.log('null', jValue('null'))

console.log('string', jString(`""`), jString(`"123123"`));

console.log(
    'number',
    jNumber('0'), 
    jNumber("123"), 
    jNumber("-123"), 
    jNumber("0.11"), 
    jNumber("-0.11"), 
);

console.log('array', jArray('[ 1, 2, 3, "123", [4, 5, 6] ]'));

console.log('object', jObject('{}'), jObject(`{ "a": 1 }`));

const result = jValue(
    JSON.stringify({
        a: 1,
        b: 2,
        c: [
            1,
            2,
            {
                d: 3
            }
        ]
    })
)

console.log('json', JSON.stringify(result, null, 2));
