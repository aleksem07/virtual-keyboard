import { buttonsEn, buttonsRu } from "./data/buttons-data.js";
import { iconKeybSwitch } from "./icons.js";
import { createElements } from "./blocks/main.js";
const keyboard = document.querySelector(".keyboard");

const langLed = document.querySelector(".screen__lang-led");

const switchLangLed = () => {
  if (langLed.textContent == "En") {
    langLed.textContent = "Ru";
  } else if (langLed.textContent == "Ru") {
    langLed.textContent = "En";
  }
};

const switchButtons = (evt) => {
  switchLangLed(evt);
  if (langLed.textContent == "En") {
    keyboard.innerHTML = "";
    createElements.buttons(buttonsEn);
    iconKeybSwitch();
  } else if (langLed.textContent == "Ru") {
    keyboard.innerHTML = "";
    createElements.buttons(buttonsRu);
    iconKeybSwitch();
  }
};

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
