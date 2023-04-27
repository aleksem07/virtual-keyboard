const body = document.querySelector(".page__body");
const main = document.createElement("main");
main.className = "main";

const div = document.createElement("div");
const button = document.createElement("button");
const ul = document.createElement("ul");
const audio = document.createElement("audio");
audio.id = "sound";
audio.src = "assets/button-press.mp3";

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

//create clean
const clean = button.cloneNode(true);
clean.textContent = "cleaner(ESC)";
clean.className = "clean add-led";

// create sound
const sound = button.cloneNode(true);
sound.textContent = "sound Off";
sound.className = "add-led sound off";
sound.disabled = "true";

// create voice
const voice = button.cloneNode(true);
voice.textContent = "voice Off";
voice.className = "add-led voice off";
voice.disabled = "true";

//hide keyboard
const keyboardHide = button.cloneNode(true);
keyboardHide.textContent = "hide keyb Off";
keyboardHide.className = "add-led keyb off";

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
  addLedPanel.appendChild(clean);
  addLedPanel.appendChild(sound);
  addLedPanel.appendChild(voice);
  addLedPanel.appendChild(keyboardHide);
  main.appendChild(keyboard);
  main.appendChild(audio);
};

createMain();
