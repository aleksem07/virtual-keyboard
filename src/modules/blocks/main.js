const body = document.querySelector(".page__body");
const main = document.createElement("main");
main.className = "main";

const div = document.createElement("div");
const button = document.createElement("button");
const ul = document.createElement("ul");

//create display
const screen = div.cloneNode(true);
screen.className = "screen";
const cursor = document.createElement("textarea");
cursor.textContent = "";
cursor.className = "screen__cursor";

//create addLed
const addLedPanel = div.cloneNode(true);
addLedPanel.className = "screen__add-led";

//create lang
const currentLanguageLed = button.cloneNode(true);
currentLanguageLed.textContent = "En";
currentLanguageLed.className = "screen__lang-led add-led";

//create clear
const clear = button.cloneNode(true);
clear.textContent = "clear(ESC)";
clear.className = "clear add-led";

// create sound
const sound = button.cloneNode(true);
sound.textContent = "sound Off";
sound.className = "add-led";

// create voice
const voice = button.cloneNode(true);
voice.textContent = "voice Off";
voice.className = "add-led";

//hide keyboard
const keyboardHide = button.cloneNode(true);
keyboardHide.textContent = "hide keyb Off";
keyboardHide.className = "add-led";

//create keyboard
const keyboard = ul.cloneNode(true);
keyboard.className = "keyboard";

//create main
const createMain = () => {
  body.appendChild(main);
  main.appendChild(screen);
  screen.appendChild(cursor);
  screen.appendChild(addLedPanel);
  addLedPanel.appendChild(currentLanguageLed);
  addLedPanel.appendChild(clear);
  addLedPanel.appendChild(sound);
  addLedPanel.appendChild(voice);
  addLedPanel.appendChild(keyboardHide);
  main.appendChild(keyboard);
};

createMain();
