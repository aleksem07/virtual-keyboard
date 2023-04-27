const keyboard = document.querySelector(".keyboard");
let buttons = keyboard.children;

const iconKeybSwitch = () => {
  for (let el of buttons) {
    if (el.dataset.code === "Backspace") {
      el.className = "button big material-icons";
      el.lastChild.textContent = "backspace";
    }
    if (el.dataset.code === "Space") {
      el.className = "button super-big material-icons";
      el.lastChild.textContent = "space_bar";
    }
    if (el.dataset.code === "Enter") {
      el.className = "button big material-icons";
      el.lastChild.textContent = "subdirectory_arrow_left";
    }
    if (el.dataset.code === "ArrowUp") {
      el.className = "button small material-icons";
      el.lastChild.textContent = "arrow_upward";
    }
    if (el.dataset.code === "ArrowDown") {
      el.className = "button small material-icons";
      el.lastChild.textContent = "arrow_downward";
    }
    if (el.dataset.code === "ArrowLeft") {
      el.className = "button small material-icons";
      el.lastChild.textContent = "arrow_back";
    }
    if (el.dataset.code === "ArrowRight") {
      el.className = "button small material-icons";
      el.lastChild.textContent = "arrow_forward";
    }
  }
};

export { iconKeybSwitch };
