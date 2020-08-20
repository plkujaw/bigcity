import Appreciation from "./js/src/appreciation.js";

const appreciateBtn = document.getElementById("appreciate");
const appreciationCount = document.querySelector(".appreciations span");

const appreciations = new Appreciation(parseInt(appreciationCount.textContent));

appreciateBtn.addEventListener("click", () => {
  appreciations.addAppreciation();
  appreciationCount.textContent = appreciations.count;
});
