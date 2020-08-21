import Comment from "./../src/comment.js";

test("comment should have a content", () => {
  const comment = new Comment("awesome content, well done!");
  expect(comment.content).toBe("awesome content, well done!");
});

test("comment should have an author", () => {
  const comment = new Comment("awesome content, well done!", "author");
  expect(comment.author).toBe("author");
});

test("if author name not given, should be anonymous", () => {
  const comment = new Comment("awesome content, well done!");
  expect(comment.author).toBe("anonymous");
});
