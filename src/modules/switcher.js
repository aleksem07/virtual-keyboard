import { buttonsEn, buttonsRu } from "./data/buttons-data.js";
import { iconKeybSwitch } from "./icons.js";
import { createElements } from "./blocks/main.js";
import { clickPrint } from "./print.js";
import { upperText, lowerText } from "./to-up-and-low-key-text.js";
const keyboard = document.querySelector(".keyboard");

const langLed = document.querySelector(".screen__lang-led");

const switchLangLed = () => {
  if (langLed.textContent == "En") {
    langLed.textContent = "Ru";
  } else if (langLed.textContent == "Ru") {
    langLed.textContent = "En";
  }
};
clickPrint();
const switchButtons = (evt) => {
  switchLangLed(evt);
  if (langLed.textContent == "En") {
    keyboard.innerHTML = "";
    createElements.buttons(buttonsEn);
    clickPrint();
    iconKeybSwitch();
  } else if (langLed.textContent == "Ru") {
    keyboard.innerHTML = "";
    createElements.buttons(buttonsRu);
    clickPrint();
    iconKeybSwitch();
  }
};

const shift = () => {
  document.addEventListener("keydown", (evt) => {
    if (evt.key === "Shift") {
      upperText();
    }
  });
  document.addEventListener("keyup", (evt) => {
    if (evt.key === "Shift") {
      lowerText();
    }
  });
};
shift();

const caps = () => {
  document.addEventListener("keydown", (evt) => {
    if (evt.code == "CapsLock") {
    }
  });
};
caps();
//switch lang on keyboard
const switchLangKey = (func, ...codes) => {
  let pressed = new Set();

  document.addEventListener("keydown", (evt) => {
    pressed.add(evt.code);
    for (let code of codes) {
      if (!pressed.has(code)) {
        return;
      }
    }
    pressed.clear();
    func();
    document.addEventListener("keyup", (evt) => {
      pressed.delete(evt.code);
    });
  });
};

switchLangKey(() => switchButtons(), "ShiftLeft", "ControlLeft");

langLed.addEventListener("click", () => switchButtons());
