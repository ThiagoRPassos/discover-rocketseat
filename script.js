const html = document.documentElement
const toggle = document.querySelector("#switch")
const avatar = document.querySelector("#profile img")

toggle.addEventListener("click", () => html.classList.toggle("light"), avatar.setAttribute('src', './assets/avatar-light.png'))