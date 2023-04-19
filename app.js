const toggleSwitch = document.querySelector("input");
toggleSwitch.addEventListener("change", switchTheme);
const nav = getElement("nav");
const text_box = getElement("text_box");

function getElement(id) {
  return document.getElementById(id);
}

function switchTheme(event) {
  console.log("event", event);
  if (event.target.checked) {
    localStorage.setItem("theme", "dark");
    themeSwap("dark", 0, 255);
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
    themeSwap("light", 255, 0);
    document.documentElement.setAttribute("data-theme", "light");
  }
}

function themeSwap(theme, navColor, textStyle) {
  nav.style.background = `rgb(${navColor} ${navColor} ${navColor}/50%)`;
//   text_box.style.backgroundColor = `rgb(red red red)`;
  text_box.style.backgroundColor = `rgb(${textStyle} ${textStyle} ${textStyle} / 50%)`;
}

const currentTheme = localStorage.getItem("theme");
