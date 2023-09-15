// indivdual selectors
// const buttonID = document.getElementById("clickable");
// const buttonClass = document.getElementsByClassName("btn");
// // tag selector
// const buttonTag = document.getElementsByTagName("button");

// dynamic selectors
const button = document.querySelector("#clickable-1");
const checkTextButton = document.querySelector("#clickable-5");

let currentContent;
const allButtons = document.querySelectorAll(".btn");

const eventHandler = (e, event) => {
  console.log({ target: e.target.id, event });
};
const textField = document.querySelector("#clickable-4");

const textChecker = () => {
  if (currentContent === textField.textContent) {
    console.log("no change");
  } else {
    console.log("text Changed");
  }
};

const events = ["blur", "focus", "click", "change"];

allButtons.forEach((btn, i) => {
  btn.addEventListener(events[i], (e) => eventHandler(e, events[i]));
  console.warn(`Added ${events[i]} to ${btn.id}`);
});

checkTextButton.addEventListener("click", textChecker);

window.addEventListener("DOMContentLoaded", () => {
  currentContent = textField.textContent;
});
