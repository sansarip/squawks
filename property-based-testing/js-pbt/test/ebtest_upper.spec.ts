var expect = require("chai").expect;

describe("maintains length", () => {
    it("the length of the original string is the same as length of the uppercase string", () => {
        expect("caca".length).to.equal("caca".toUpperCase().length);
    })
})

describe("uppercase less than lowercase", () => {
    it("the value of the uppercase string is less than the value of the lowercase string", () => {
        expect("caca".toUpperCase() > "caca");
    })
})

describe("uppercase avoids non lowercase", () => {
    it("only lowercase characters are affected", () => {
        expect("ABC123").to.equal("AbC123".toUpperCase());
    })
})
