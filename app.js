import AppreciationsCount from "./js/src/appreciation.js";
import Comment from "./js/src/comment.js";

const appreciateBtn = document.getElementById("appreciate-btn");
const appreciationCount = document.querySelector(".appreciations span");

const commentFormDiv = document.querySelector(".comment-form-container");
const commentBtn = document.getElementById("comment-btn");
const commentForm = document.getElementById("comment-form");

const comments = document.querySelector(".comments-list");
const feedback = document.querySelector(".feedback");
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

  document.getElementById("author").value = "";
  document.getElementById("comment-input-textarea").value = "";
});

function addComment() {
  const commentAuthor = document.getElementById("author").value;
  const commentContent = document.getElementById("comment-input-textarea")
    .value;
  const comment = new Comment(commentContent, commentAuthor);
  const commentDiv = document.createElement("article");

  if (comment.isEmpty()) {
    feedback.classList.remove("hide");
    feedback.innerHTML = `<p> Please enter some text </p>`;
    setTimeout(function () {
      feedback.classList.add("hide");
    }, 3000);
  } else {
    commentDiv.classList.add("comment");
    if (comment.hasNoAuthor()) {
      commentDiv.innerHTML = `by <strong>anonymous</strong> @${comment.timestamp} </br>
      ${comment.content}`;
    } else {
      commentDiv.innerHTML = `by <strong>${comment.author}</strong> @${comment.timestamp} </br>
      ${comment.content}`;
    }
    comments.appendChild(commentDiv);
  }
}
