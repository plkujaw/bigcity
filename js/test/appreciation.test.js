import AppreciationsCount from "./../src/appreciation.js";

test("should increase number by 1", () => {
  const appreciations = new AppreciationsCount();
  appreciations.count = 1;
  appreciations.addAppreciation();
  expect(appreciations.count).toBe(2);
});
