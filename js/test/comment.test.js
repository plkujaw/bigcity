import Comment from "./../src/comment.js";

test("comment should have a content", () => {
  const comment = new Comment("awesome content, well done!");
  expect(comment.content).toBe("awesome content, well done!");
});

test("checks if comment content provided", () => {
  const comment = new Comment("awesome content, well done!");
  expect(comment.isEmpty()).toBe(false);
});

test("comment should have an author", () => {
  const comment = new Comment("awesome content, well done!", "author");
  expect(comment.author).toBe("author");
});

test("if author name not given, should be anonymous", () => {
  const comment = new Comment("awesome content, well done!");
  expect(comment.author).toBe("anonymous");
});

test("comment should have a timestamp with current date and time", () => {
  const comment = new Comment("awesome content, well done!");
  const date = new Date().toLocaleString();
  // const day = date.getDate();
  // const month = date.getMonth() + 1;
  // const year = date.getFullYear();
  // const hour = date.getHours();
  // const mins = date.getMinutes();

  const timestamp = date;
  expect(comment.timestamp).toBe(timestamp);
});
