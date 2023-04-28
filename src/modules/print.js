const display = document.querySelector(".screen__cursor");
const cleanLed = document.querySelector(".clean");
let keyboard = document.querySelector(".keyboard");
let buttons = keyboard.children;
display.focus();

let clickPrint = () => {
  let keyboard = document.querySelector(".keyboard");
  let buttons = keyboard.children;
  for (let button of buttons) {
    button.onclick = function () {
      display.focus();
      const buttonFirst = button.querySelector(".button-first");

      let char = buttonFirst.textContent;
      let displayText = display.value;

      if (char.length < 2) {
        displayText = displayText + char;
        char = buttonFirst.textContent;
        display.value = displayText;
      }

      if (button.classList.contains("super-big")) {
        char = " ";
        displayText = displayText + char;
        display.value = displayText;
      }
      if (button.dataset.code === "Enter") {
        char = "\n";
        displayText = displayText + char;
        display.value = displayText;
      }
    };
  }
};

cleanLed.addEventListener("click", () => {
  display.value = "";
});

//print with keyb
document.addEventListener("keydown", (evt) => {
  let char = evt.key;
  let displayText = display.value;

  if (char.length < 2) {
    displayText = displayText + char;
    display.value = displayText;
  }
  //clean
  if (char === "Escape") {
    display.value = "";
    cleanLed.style.background = "tomato";
    cleanLed.style.boxShadow = "inset -1px -1px 5px 0 #3a3a3a";
  }
  if (evt.code === "Enter") {
    char = "\n";
    displayText = displayText + char;
    display.value = displayText;
  }
  //style press

  for (let button of buttons) {
    if (evt.code == button.dataset.code) {
      button.style.background = "tomato";
      button.style.boxShadow = "inset -1px -1px 5px 0 #3a3a3a";
    }
  }
});

document.addEventListener("keyup", (evt) => {
  for (let button of buttons) {
    if (evt.code == button.dataset.code) {
      button.style.background = "#3a3a3a";
      button.style.boxShadow = "-2px -2px 4px 0 #3a3a3a";
    }
    if (evt.key === "Escape") {
      display.textContent = "";
      cleanLed.style.background = "#3a3a3a";
      cleanLed.style.boxShadow = "-2px -2px 4px 0 #3a3a3a";
    }
  }
});

export { clickPrint };
