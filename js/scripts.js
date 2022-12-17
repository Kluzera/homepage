console.log("Cześć wszystkim!");

let button = document.querySelector(".aside__button");
let body = document.querySelector(".body");
let themeName = document.querySelector(".js-themeName");

button.addEventListener("click", () => {
    body.classList.toggle("dark");

    themeName.innerText = body.classList.contains("dark") ? "białe" : "szere";
});