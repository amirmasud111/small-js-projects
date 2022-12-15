let counter = document.querySelector("#counter")
let increase = document.querySelector(".add")
let decrease = document.querySelector(".lower")


increase.addEventListener("click", () => {
    counter.innerHTML++;
    if (counter.innerHTML > 0) {
        counter.classList.remove("colorRed");
        counter.classList.add("colorGreen")
    } else if(counter.innerHTML == 0){
        counter.classList.remove("colorRed");
    }
})

decrease.addEventListener("click", () => {
    counter.innerHTML--;
    if (counter.innerHTML < 0) {
        counter.classList.remove("colorGreen");
        counter.classList.add("colorRed")
    } else if(counter.innerHTML == 0) {
        counter.classList.remove("colorGreen");
    }
})

