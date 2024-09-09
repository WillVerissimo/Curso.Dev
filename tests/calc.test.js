test("test name", () => {
  console.log("and now?");
});

test("another test", () => {
  console.log("testing another condition in another test");
});

test("I hope number 1 is really 1", () => {
  expect(1).toBe(1);
});
