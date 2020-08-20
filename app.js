import AppreciationsCount from "./js/src/appreciation.js";

const appreciateBtn = document.getElementById("appreciate");
const appreciationCount = document.querySelector(".appreciations span");

const appreciations = new AppreciationsCount(
  parseInt(appreciationCount.textContent)
);

appreciateBtn.addEventListener("click", () => {
  appreciations.addAppreciation();
  appreciationCount.textContent = appreciations.count;
});
