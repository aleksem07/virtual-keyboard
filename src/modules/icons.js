const iconKeybSwitch = () => {
  const keyboard = document.querySelector(".keyboard");
  const buttons = keyboard.children;
  for (const el of buttons) {
    if (el.dataset.code === "Backspace") {
      el.className = "button big material-icons";
      el.firstChild.textContent = "backspace";
    }
    if (el.dataset.code === "Space") {
      el.className = "button super-big material-icons";
      el.firstChild.textContent = "space_bar";
    }
    if (el.dataset.code === "Enter") {
      el.className = "button big material-icons";
      el.firstChild.textContent = "subdirectory_arrow_left";
    }
    if (el.dataset.code === "ArrowUp") {
      el.className = "button small material-icons";
      el.firstChild.textContent = "arrow_upward";
    }
    if (el.dataset.code === "ArrowDown") {
      el.className = "button small material-icons";
      el.firstChild.textContent = "arrow_downward";
    }
    if (el.dataset.code === "ArrowLeft") {
      el.className = "button small material-icons";
      el.firstChild.textContent = "arrow_back";
    }
    if (el.dataset.code === "ArrowRight") {
      el.className = "button small material-icons";
      el.firstChild.textContent = "arrow_forward";
    }
  }
};
export { iconKeybSwitch };
