const body = document.querySelector("body");
const btn = document.querySelector("#btn");
const hexCode = document.querySelector("#hex-code");

let colorHexLetters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];

btn.addEventListener("click", (e) => {
    backGroundChanger();
})
window.addEventListener("load", (e) => {
    backGroundChanger();
})


function backGroundChanger() {
    let hexText = "";
    for (i = 0; i < 6; i++) {
        hexText += colorHexLetters[Math.floor(Math.random() * colorHexLetters.length)];
    }
    body.style.backgroundColor = "#" + hexText;
    hexCode.innerHTML = "#" + hexText;


}

