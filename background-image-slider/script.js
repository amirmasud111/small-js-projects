let next = document.querySelector("#next");
let pre = document.querySelector("#pre");
let container = document.querySelector(".container");

let index = 0;

window.addEventListener("load", () => {
    container.style.backgroundImage = `url("./images/${imagesArray[index]}.jpeg")`;
})

let imagesArray = ["0", "1", "2", "3", "4"];

next.addEventListener("click", () => {

    index == imagesArray.length - 1 ? index = 0 : index++;

    container.style.backgroundImage = `url("./images/${imagesArray[index]}.jpeg")`;
})

pre.addEventListener("click", () => {
    index == 0 ? index = imagesArray.length - 1 : index--;
    container.style.backgroundImage = `url("./images/${imagesArray[index]}.jpeg")`;
})



