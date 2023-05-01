const keyboard = document.querySelector(".keyboard");

const upperText = () => {
  const buttons = keyboard.children;

  Array.from(buttons).map((button) => {
    if (button.firstChild.textContent.length < 2) {
      button.firstChild.textContent = button.firstChild.textContent.toUpperCase();
    }
  });
};

const lowerText = () => {
  const buttons = keyboard.children;
  Array.from(buttons).map((button) => {
    button.classList.remove("active");
    button.firstChild.textContent = button.firstChild.textContent.toLowerCase();
    if (
      button.firstChild.textContent.length > 1 &&
      button.firstChild.textContent.length < 6 &&
      button.firstChild.textContent !== "del"
    ) {
      button.firstChild.textContent =
        button.firstChild.textContent[0].toUpperCase() + button.firstChild.textContent.slice(1);
    }
  });
};

export { upperText, lowerText };
