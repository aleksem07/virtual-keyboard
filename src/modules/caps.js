const keyboard = document.querySelector(".keyboard");
const buttons = keyboard.children;

const caps = () => {
  document.addEventListener("keydown", (evt) => {
    if (evt.code === "ShiftLeft") {
      for (const el of buttons) {
        el.textContent.toUpperCase();
      }
    }
  });
};
caps();
