const keyboard = document.querySelector(".keyboard");

const upperText = () => {
  let buttons = keyboard.children;
  for (let button of buttons) {
    if (button.firstChild.textContent.length < 2) {
      button.firstChild.textContent =
        button.firstChild.textContent.toUpperCase();
    }
  }
};

const lowerText = () => {
  let buttons = keyboard.children;
  for (let button of buttons) {
    button.classList.remove("active");
    button.firstChild.textContent = button.firstChild.textContent.toLowerCase();
    if (
      button.firstChild.textContent.length > 1 &&
      button.firstChild.textContent.length < 6 &&
      button.firstChild.textContent != "del"
    ) {
      button.firstChild.textContent =
        button.firstChild.textContent[0].toUpperCase() +
        button.firstChild.textContent.slice(1);
    }
  }
};

export { upperText, lowerText };
