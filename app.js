import AppreciationsCount from "./js/src/appreciation.js";
import Comment from "./js/src/comment.js";

const appreciateBtn = document.getElementById("appreciate-btn");
const appreciationCount = document.querySelector(".appreciations span");

const commentForm = document.querySelector(".comment-form-container");
const commentBtn = document.getElementById("comment-btn");
const submitComment = document.getElementById("submit-comment");

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
