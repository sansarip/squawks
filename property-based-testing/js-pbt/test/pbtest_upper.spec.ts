var jsc = require("jsverify");

function notEmpty(t: Array<Object> | String): Boolean {
    return t.length > 0;
}

function asciiArrayToString(charArray: Array<number>): String {
    return charArray.map(n => String.fromCharCode(n)).join();
}

describe("maintains length", () => {
    it("The length of the original string is the same as length of the uppercase string", () => {
        jsc.assert(jsc.forall(jsc.string, (str: String) => {
            return str.length == str.toUpperCase().length;
        }),
            { "tests": 100 });
    });
});


describe("uppercase less than lowercase", () => {
    it("the value of the uppercase string is less than or equal to the value of the lowercase string", () => {
        jsc.assert(jsc.forall(jsc.suchthat(jsc.string, notEmpty), (str: String) => {
            return str.toUpperCase() <= str;
        }),
            { "tests": 100 });
    })
});


describe("uppercase avoids non lowercase", () => {
    it("only lowercase characters are affected", () => {
        jsc.assert(jsc.forall(jsc.suchthat(jsc.array(jsc.either(jsc.nat(32, 96), jsc.nat(123, 126), jsc.nat(128, 159))), notEmpty).smap(asciiArrayToString),
            (str: String) => {
                return str.toUpperCase() === str;
            }),
            { "tests": 100 })
    })
});


