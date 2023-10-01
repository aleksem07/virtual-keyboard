const hideKeybButton = document.querySelector(".keyb");
const keyboard = document.querySelector(".keyboard");
hideKeybButton.addEventListener("click", () => {
  if (hideKeybButton.textContent == "hide keyb Off") {
    hideKeybButton.textContent = "hide keyb On";
    hideKeybButton.classList.add("active");
    keyboard.style.height = "0";
    keyboard.style.padding = "0";
    keyboard.style.top = "-61px";
  } else if (hideKeybButton.textContent == "hide keyb On") {
    hideKeybButton.textContent = "hide keyb Off";
    hideKeybButton.classList.remove("active");
    keyboard.style.height = "200px";
    keyboard.style.top = "0px";
    keyboard.style.padding = "10px";
  }
});
