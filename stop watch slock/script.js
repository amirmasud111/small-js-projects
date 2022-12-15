let startBtn = document.querySelector("#startBtn");
let stopBtn = document.querySelector("#stopBtn");
let resetBtn = document.querySelector("#resetBtn");
let seconds = document.querySelector("#seconds");
let mSeconds = document.querySelector("#mili-seconds");

let ms = 0;
let s = 0;




startBtn.addEventListener("click", () => {
    myInterval = setInterval(startTimer, 10);
})

stopBtn.addEventListener("click", () => {
    clearInterval(myInterval);
})

resetBtn.addEventListener("click", () => {
    clearInterval(myInterval);
    ms = 0;
    s = 0;
    mSeconds.innerHTML = "0" + ms;
    seconds.innerHTML = "0" + s;
})



function startTimer() {
    ms++;
    if (ms <= 9) {
        mSeconds.innerHTML = "0" + ms;
    }
    if (ms > 9) {
        mSeconds.innerHTML = ms;
    }
    if (ms > 99) {
        s++;
        ms = 0;

    }
    if (s <= 9) {
        seconds.innerHTML = "0" + s;
    }
    if (s > 9) {
        seconds.innerHTML = s;
    }
}