const fc = require("fast-check");

const NON_ALPHA_ASCII = [
  "!",
  '"',
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "\\",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
];
const nonAlphaAsciiChar = () => fc.constantFrom(...NON_ALPHA_ASCII);
const nonAlphaAsciiString = () => fc.stringOf(nonAlphaAsciiChar());

describe("uppercase properties", () => {
  it("the length of the original string is the same as length of the uppercase string", () => {
    fc.assert(
      fc.property(fc.unicodeString(), (s) => s.length === s.toUpperCase().length),
      { numRuns: 100 }
    );
  });

  it("the value of the uppercase string is less than or equal to the value of the lowercase string", () => {
    fc.assert(
      fc.property(fc.unicodeString(), (s) => s.toUpperCase() <= s),
      { numRuns: 100 }
    );
  });

  it("the value of non-alphabetical ASCII chars are the same", () => {
    fc.assert(
      fc.property(nonAlphaAsciiString(), (s) => s === s.toUpperCase())
    );
  });

  it("the uppercase function is idempotent", () => {
    fc.assert(
      fc.property(fc.unicodeString(), (s) => s.toUpperCase() === s.toUpperCase())
    );
  });
});
