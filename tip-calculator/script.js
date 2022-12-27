let inputs = document.querySelectorAll("input");
let satisfaction = document.querySelector("select");
let alerts = document.querySelector(".alert");
let result = document.querySelector(".result")
let loading = document.querySelector(".loading-image");

let bills;
let numbs;

inputs.forEach(input => {

    if (input.parentElement.classList.contains("input-bill")) {
        input.addEventListener("input", () => {
            bills = input.value;
        })

    } else if (input.parentNode.className == "input-peaple") {
        input.addEventListener("input", () => {
            numbs = input.value;
        })

    } else {
        input.addEventListener("click", (e) => {
            e.preventDefault();
            calculate();
        })
    }
})

function calculate() {
    if (!bills) {
        alerts.children[0].style.display = "block";
        alerts.style.display = "block";
    }
    if (!numbs) {
        alerts.children[1].style.display = "block";
        alerts.style.display = "block";
    }
    if (satisfaction.value == 0) {
        alerts.children[2].style.display = "block";
        alerts.style.display = "block";
    }
    setTimeout(timeOutAlert, 2000);

    if (bills && numbs && satisfaction.value != 0) {
        loading.style.display = "block";
        setTimeout(cal, 3000); //simulating Promise for back res
    }


}

function cal() {
    let total = bills * 1 + bills * satisfaction.value;
    result.style.display = "block";
    loading.style.display = "none";
    result.children[0].innerHTML += bills * satisfaction.value;
    result.children[1].innerHTML += total;
    result.children[2].innerHTML += total / numbs;
    setTimeout(timeOutResult, 2000);
}

function timeOutResult() {
    inputs.forEach(input => {
        if (input.type != "submit") {
            input.value = "";
        }

    })

    result.style.display = "none";
    // loading.style.display = "none"
    satisfaction.value = 0;
    bills = "";
    numbs = "";
}

function timeOutAlert() {
    Array.from(alerts.children).forEach(alert => {
        alert.style.display = "none";
    })
    alerts.style.display = "none";

}






