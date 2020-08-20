import Appreciation from "./../src/appreciation.js";

test("should increase number by 1", () => {
  const appreciation = new Appreciation();
  appreciation.count = 1;
  appreciation.addAppreciation();
  expect(appreciation.count).toBe(2);
});
