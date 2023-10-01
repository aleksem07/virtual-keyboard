import { buttonsEn, buttonsRu } from "./data/buttons-data";
import { iconKeybSwitch } from "./icons";
import { createElements } from "./blocks/main";
import { clickPrint } from "./print";
import { upperText, lowerText } from "./to-up-and-low-key-text";

const keyboard = document.querySelector(".keyboard");
const langLed = document.querySelector(".screen__lang-led");
const currentLang = document.querySelector(".small");

if (currentLang.firstChild.textContent === "ё") {
  langLed.textContent = "Ru";
} else {
  langLed.textContent = "En";
}

const switchLangLed = () => {
  if (langLed.textContent === "En") {
    langLed.textContent = "Ru";
  } else if (langLed.textContent === "Ru") {
    langLed.textContent = "En";
  }
};
clickPrint();

const switchButtons = () => {
  switchLangLed();
  if (langLed.textContent === "En") {
    keyboard.innerHTML = "";
    createElements.buttons(buttonsEn);
    clickPrint();
    iconKeybSwitch();
    return localStorage.setItem("lang", JSON.stringify(buttonsEn));
  }
  if (langLed.textContent === "Ru") {
    keyboard.innerHTML = "";
    createElements.buttons(buttonsRu);
    clickPrint();
    iconKeybSwitch();
    return localStorage.setItem("lang", JSON.stringify(buttonsRu));
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

// switch lang on keyboard
const switchLangKey = (func, ...codes) => {
  const pressed = new Set();

  document.addEventListener("keydown", (evt) => {
    pressed.add(evt.code);
    for (const code of codes) {
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
