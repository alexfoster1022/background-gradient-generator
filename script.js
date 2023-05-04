const cssValue = document.querySelector("h3");
const colorOne = document.querySelector(".color-one");
const colorTwo = document.querySelector(".color-two");
const body = document.getElementById("gradient");

const setGradient = () => {
  body.style.background =
    "linear-gradient(90deg, " + colorOne.value + ", " + colorTwo.value + ")";
  cssValue.textContent = body.style.background + ";";
};

colorOne.addEventListener("input", setGradient);
colorTwo.addEventListener("input", setGradient);
