const body = document.querySelector("body");
const btn = document.querySelector("#btn");

let colors = ["pink", "purple", "blue", "yellow", "red", "green"];


btn.addEventListener("click", (e) => {
    backGroundChanger();
})
window.addEventListener("load", (e) => {
    backGroundChanger();
})


function backGroundChanger() {
    let index = Math.floor(Math.random() * colors.length);
    while (body.style.backgroundColor == colors[index]) {
        index = Math.floor(Math.random() * colors.length);
    }
    body.style.backgroundColor = colors[index];
}

