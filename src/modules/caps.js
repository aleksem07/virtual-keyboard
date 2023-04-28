const keyboard = document.querySelector(".keyboard");
let buttons = keyboard.children;
let letter = keyboard.querySelectorAll(".button-first");

const caps = () => {
  document.addEventListener("keydown", (evt) => {
    if (evt.code === "ShiftLeft") {
      for (let el of buttons) {
        el.textContent.toUpperCase();
      }
    }
  });
};
caps();
