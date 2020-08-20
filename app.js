import Appreciation from "./js/src/appreciation.js";

const appreciateBtn = document.getElementById("appreciate");
const appreciationCount = document.querySelector(".appreciations span");
const appreciation = new Appreciation(parseInt(appreciationCount.textContent));

appreciateBtn.addEventListener("click", () => {
  appreciation.addAppreciation();
  appreciationCount.textContent = appreciation.count;
});
