let clockHour = document.querySelector("#hours");
let clockMin = document.querySelector("#mins");
let clockSec = document.querySelector("#secs");
let clockState = document.querySelector("#states");

function updateClock() {
    let hours;
    let mins;
    let secs;
    let date = new Date();
    hours = date.getHours();
    mins = date.getMinutes();
    secs = date.getSeconds();


    clockSec.innerHTML = secs <= 9 ? "0" + secs : secs;
    clockMin.innerHTML = mins <= 9 ? "0" + mins : mins;
    if (hours < 12) {
        clockHour.innerHTML = hours <= 9 ? "0" + hours : hours;
        clockState.innerHTML = "AM"
    } else {
        hours = hours - 12;
        clockHour.innerHTML = hours <= 9 ? "0" + hours : hours;
        clockState.innerHTML = "PM"
    }

    setInterval(updateClock, 1000)
}


updateClock();