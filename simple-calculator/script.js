const screen = document.querySelector(".screen");
const btns = document.querySelectorAll(".btn");
const equal = document.querySelector(".btn-equal");
const clear = document.querySelector(".btn-clear");

let dotOperator = true;


clear.addEventListener("click", e => {
    screen.value = "";
})

btns.forEach(btn => {
    btn.addEventListener("click", e => {
        if (screen.value.includes("plz")) {
            screen.value = "";
        }
        if (e.target.innerText == "*" || e.target.innerText == "/" || e.target.innerText == "+" || e.target.innerText == "-") {
            dotOperator = true;
            if (screen.value.slice(-1) == "*" || screen.value.slice(-1) == "/" || screen.value.slice(-1) == "+" ||
                screen.value.slice(-1) == "-" || screen.value.slice(-1) == ".") {
                screen.value = screen.value.slice(0, -1);
            }
        }
        if (e.target.innerText == "." && dotOperator) {
            dotOperator = false;
            screen.value += e.target.innerText;
        } else if (e.target.innerText == "." && !dotOperator) {
            screen.value += "";
        } else if (e.target.innerText != ".") {
            screen.value += e.target.innerText;
        }


    })
})

equal.addEventListener("click", e => {
    if (screen.value[0] == "*" || screen.value[0] == "/" || screen.value[0] == "-" || screen.value[0] == "+") {
        screen.value = "0" + screen.value;
    }
    screen.value = screen.value ? eval(screen.value) : "plz type value!";


})