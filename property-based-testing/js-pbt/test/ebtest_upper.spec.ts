describe("test uppercase", () => {
  it("string is uppercased", () => {
    expect("BABA").toEqual("baba".toUpperCase());
  });

  it("empty string is the same", () => {
    expect("").toEqual("".toUpperCase());
  })

  it("non-alphanumerical is unaffected", () => {
    expect("{}[]!123.").toEqual("{}[]!123.".toUpperCase());
  })
});
