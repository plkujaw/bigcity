import Comment from "./../src/comment.js";

test("comment should have a content", () => {
  const comment = new Comment("awesome content, well done!");
  expect(comment.content).toBe("awesome content, well done!");
});

test("comment should have an author", () => {
  const comment = new Comment("awesome content, well done!", "username");
  expect(comment.author).toBe("username");
});
