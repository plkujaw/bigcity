import AppreciationsCount from "./js/src/appreciation.js";
import Comment from "./js/src/comment.js";

const appreciateBtn = document.getElementById("appreciate-btn");
const appreciationCount = document.querySelector(".appreciations span");

const commentForm = document.querySelector(".comment-form-container");
const commentBtn = document.getElementById("comment-btn");
const addCommentBtn = document.getElementById("add-comment");

const appreciations = new AppreciationsCount(
  parseInt(appreciationCount.textContent)
);

appreciateBtn.addEventListener("click", () => {
  appreciations.addAppreciation();
  appreciationCount.textContent = appreciations.count;
});

commentBtn.addEventListener("click", () => {
  commentForm.classList.toggle("hide");
});

addCommentBtn.addEventListener("click", (e) => {
  e.preventDefault();
  commentForm.classList.add("hide");
});
