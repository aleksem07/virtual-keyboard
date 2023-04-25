const display = document.querySelector(".screen__cursor");
const clearLed = document.querySelector(".clear");
const buttons = document.querySelectorAll(".button");
const keyboard = document.querySelector(".keyboard");

for (let button of buttons) {
  button.onclick = function () {
    const buttonFirst = button.querySelector(".button-first");

    let char = buttonFirst.textContent;
    let displayText = display.textContent;
    displayText = displayText + char;

    if (char.length < 2) {
      char = buttonFirst.textContent;
      display.textContent = displayText;
    }

    if (button.classList.contains("super-big")) {
      char = " ";
      displayText = displayText + char;
      display.textContent = displayText;
    }
    if (buttonFirst.textContent === "Enter") {
      char = "\n";
      displayText = displayText + char;
      display.textContent = displayText;
    }

    console.log(display.textContent);
  };
}
clearLed.addEventListener("click", () => {
  display.textContent = "";
});

document.addEventListener("keydown", (evt) => {
  let char = evt.key;
  let displayText = display.textContent;
  if (char.length < 2) {
    displayText = displayText + char;
    display.textContent = displayText;
  }
  //clear
  if (char === "Escape") {
    display.textContent = "";
    clearLed.style.background = "tomato";
    clearLed.style.boxShadow = "inset -1px -1px 5px 0 #3a3a3a";
  }
  //style
  for (let button of buttons) {
    if (evt.key === button.lastChild.textContent) {
      button.style.background = "tomato";
      button.style.boxShadow = "inset -1px -1px 5px 0 #3a3a3a";
    }
  }
});

document.addEventListener("keyup", (evt) => {
  for (let button of buttons) {
    if (evt.key === button.lastChild.textContent) {
      button.style.background = "#3a3a3a";
      button.style.boxShadow = "-2px -2px 4px 0 #3a3a3a";
    }
    if (evt.key === "Escape") {
      display.textContent = "";
      clearLed.style.background = "#3a3a3a";
      clearLed.style.boxShadow = "-2px -2px 4px 0 #3a3a3a";
    }
  }
});
