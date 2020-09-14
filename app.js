import AppreciationsCount from "./js/src/appreciation.js";
import Comment from "./js/src/comment.js";

const appreciateBtn = document.getElementById("appreciate-btn");
const appreciationCount = document.querySelector(".appreciations span");

const commentFormDiv = document.querySelector(".comment-form-container");
const commentBtn = document.getElementById("comment-btn");
const commentForm = document.getElementById("comment-form");
// const addCommentBtn = document.getElementById("add-comment");
const comments = document.querySelector(".comments-list");

const appreciations = new AppreciationsCount(
  parseInt(appreciationCount.textContent)
);

appreciateBtn.addEventListener("click", () => {
  appreciations.addAppreciation();
  appreciationCount.textContent = appreciations.count;
});

commentBtn.addEventListener("click", () => {
  commentFormDiv.classList.toggle("hide");
});

commentForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addComment();
  commentFormDiv.classList.add("hide");
  document.getElementById("author").value = "";
  document.getElementById("comment-input-textarea").value = "";
});

function addComment() {
  const commentAuthor = document.getElementById("author").value;
  const commentContent = document.getElementById("comment-input-textarea")
    .value;
  const comment = new Comment(commentContent, commentAuthor);
  const commentDiv = document.createElement("article");
  commentDiv.classList.add("comment");
  commentDiv.innerHTML = `by ${comment.author} @${comment.timestamp} </br>
  ${comment.content}`;
  comments.appendChild(commentDiv);
}
