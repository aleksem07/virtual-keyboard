import { upperText, lowerText } from "./to-up-and-low-key-text";

const display = document.querySelector(".screen__cursor");
const cleanLed = document.querySelector(".clean");
let keyboard = document.querySelector(".keyboard");
let buttons = keyboard.children;

// display.focus();

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

      const displayValue = (char) => {
        char = char;
        displayText = displayText + char;
        display.value = displayText;
      };

      if (button.classList.contains("super-big")) {
        displayValue(" ");
      }
      if (button.dataset.code === "Enter") {
        displayValue("\n");
      }
      if (button.dataset.code === "Backspace") {
        display.value = display.value.substring(0, display.value.length - 1);
      }
      if (display.value.length > 0) {
        document.querySelector(".screen").classList.add("action");
      }
      if (display.value.length < 1) {
        document.querySelector(".screen").classList.remove("action");
      }
      if (button.dataset.code === "CapsLock") {
        button.classList.toggle("active");
      }
      if (
        button.dataset.code === "CapsLock" &&
        button.classList.contains("active")
      ) {
        upperText();
      } else if (
        button.dataset.code === "CapsLock" &&
        !button.classList.contains("active")
      )
        lowerText();
    };

    button.addEventListener("mousedown", () => {
      if (
        button.dataset.code === "ShiftLeft" ||
        button.dataset.code === "ShiftRight"
      ) {
        upperText();
      }
    });
    button.addEventListener("mouseup", () => {
      if (
        button.dataset.code === "ShiftLeft" ||
        button.dataset.code === "ShiftRight"
      ) {
        lowerText();
      }
    });
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

  if (display.value.length > 0) {
    document.querySelector(".screen").classList.add("action");
  }
  if (display.value.length < 1) {
    document.querySelector(".screen").classList.remove("action");
  }

  //style press
  for (let button of buttons) {
    display.focus();
    if (
      evt.code === button.dataset.code &&
      button.dataset.code === "CapsLock"
    ) {
      button.classList.toggle("active");
    }
    if (evt.code == button.dataset.code && button.dataset.code != "CapsLock") {
      button.classList.add("active");
    }
    if (
      evt.code === button.dataset.code &&
      !button.classList.contains("active") &&
      evt.code == "CapsLock"
    ) {
      lowerText();
    } else if (evt.code == "CapsLock" && button.classList.contains("active")) {
      upperText();
    }
  }
});

document.addEventListener("keyup", (evt) => {
  for (let button of buttons) {
    if (evt.code == button.dataset.code && button.dataset.code != "CapsLock") {
      button.classList.remove("active");
    }
    if (evt.key === "Escape") {
      display.textContent = "";
      cleanLed.style.background = "#3a3a3a";
      cleanLed.style.boxShadow = "-2px -2px 4px 0 #3a3a3a";
    }
  }
});

export { clickPrint };
