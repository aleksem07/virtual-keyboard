import { buttonsEn, buttonsRu } from "./data/buttons-data.js";
import { iconKeybSwitch } from "./icons.js";

const keyboard = document.querySelector(".keyboard");

const createButtons = (buttonsData) => {
  for (let button of buttonsData) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const spanAdd = span.cloneNode(true);
    const spanName = span.cloneNode(true);
    spanAdd.textContent = button.add;
    spanName.textContent = button.key;
    spanAdd.className = "button-second";
    spanName.className = "button-first";

    li.className = `button ${button.size}`;
    li.dataset.code = `${button.id}`;
    keyboard.appendChild(li);
    li.appendChild(spanAdd);
    li.appendChild(spanName);
    iconKeybSwitch();
  }
};

createButtons(buttonsEn);

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
    createButtons(buttonsEn);
  } else if (langLed.textContent == "Ru") {
    keyboard.innerHTML = "";
    createButtons(buttonsRu);
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
