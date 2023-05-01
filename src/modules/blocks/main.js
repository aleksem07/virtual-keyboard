import { buttonsEn } from "../data/buttons-data";
import { iconKeybSwitch } from "../icons";

const savedLang = JSON.parse(localStorage.getItem("lang"));

const createElements = {
  tags: {
    div: document.createElement("div"),
    button: document.createElement("button"),
    ul: document.createElement("ul"),
    li: document.createElement("li"),
    span: document.createElement("span"),
    textarea: document.createElement("textarea"),
  },
  elements: {
    body: document.querySelector(".page__body"),
    main: null,
    screen: null,
    cursor: null,
    ledPanel: null,
    currentLanguageLed: null,
    cleanKey: null,
    soundKey: null,
    voiceKey: null,
    keyboardHideKey: null,
    keyboard: null,
    buttonItem: null,
    buttonName: null,
    buttonAdd: null,
  },

  init() {
    // create elements
    this.elements.main = document.createElement("main");
    this.elements.screen = this.tags.div.cloneNode(true);
    this.elements.cursor = this.tags.textarea.cloneNode(true);
    this.elements.ledPanel = this.tags.div.cloneNode(true);
    this.elements.currentLanguageLed = this.tags.button.cloneNode(true);
    this.elements.cleanKey = this.tags.button.cloneNode(true);
    this.elements.soundKey = this.tags.button.cloneNode(true);
    this.elements.voiceKey = this.tags.button.cloneNode(true);
    this.elements.keyboardHideKey = this.tags.button.cloneNode(true);
    this.elements.keyboard = this.tags.ul.cloneNode(true);
    // add classes
    this.elements.main.classList.add("main");
    this.elements.screen.classList.add("screen");
    this.elements.cursor.classList.add("screen__cursor");
    this.elements.ledPanel.classList.add("screen__add-led");
    this.elements.currentLanguageLed.className = "screen__lang-led add-led";
    this.elements.cleanKey.className = "clean add-led";
    this.elements.soundKey.className = "add-led sound off";
    this.elements.voiceKey.className = "add-led voice off";
    this.elements.keyboardHideKey.className = "add-led keyb off";
    this.elements.keyboard.classList.add("keyboard");
    // add textContent
    this.elements.currentLanguageLed.textContent = "En";
    this.elements.cleanKey.textContent = "cleaner(ESC)";
    this.elements.soundKey.textContent = "sound Off";
    this.elements.voiceKey.textContent = "voice Off";
    this.elements.keyboardHideKey.textContent = "hide keyb Off";
    // disabled
    this.elements.soundKey.disabled = "true";
    this.elements.voiceKey.disabled = "true";
    // add to DOM
    this.elements.body.appendChild(this.elements.main);
    this.elements.main.appendChild(this.elements.screen);
    this.elements.screen.appendChild(this.elements.cursor);
    this.elements.screen.appendChild(this.elements.ledPanel);
    this.elements.ledPanel.appendChild(this.elements.currentLanguageLed);
    this.elements.ledPanel.appendChild(this.elements.cleanKey);
    this.elements.ledPanel.appendChild(this.elements.soundKey);
    this.elements.ledPanel.appendChild(this.elements.voiceKey);
    this.elements.ledPanel.appendChild(this.elements.keyboardHideKey);
    this.elements.main.appendChild(this.elements.keyboard);
  },
  buttons(buttonsData) {
    for (const button of buttonsData) {
      // create el
      this.elements.buttonItem = this.tags.li.cloneNode(true);
      this.elements.buttonName = this.tags.span.cloneNode(true);
      this.elements.buttonAdd = this.tags.span.cloneNode(true);
      // add textContent
      this.elements.buttonName.textContent = button.key;
      this.elements.buttonAdd.textContent = button.add;
      // add classes
      this.elements.buttonItem.className = `button ${button.size}`;
      this.elements.buttonName.classList.add("button-first");
      this.elements.buttonAdd.classList.add("button-second");
      // add data
      this.elements.buttonItem.dataset.code = `${button.id}`;
      // add to DOM
      this.elements.keyboard.appendChild(this.elements.buttonItem);
      this.elements.buttonItem.appendChild(this.elements.buttonName);
      this.elements.buttonItem.appendChild(this.elements.buttonAdd);
    }
  },
};

createElements.init();
if (localStorage.length == 0) {
  createElements.buttons(buttonsEn);
} else {
  createElements.buttons(savedLang);
}
createElements.elements.screen.focus();
iconKeybSwitch();

export { createElements };
