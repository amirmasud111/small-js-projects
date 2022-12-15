let inputValue = document.querySelector("#inputValue");
let btn = document.querySelector("#submitBtn");
let lastMessage = document.querySelector(".message");
let alert = document.querySelector("#alert")


btn.addEventListener("click", function () {
    showLastMessage();
});

inputValue.addEventListener("keydown", function (e) {
    if (e.code == "Enter") {
        showLastMessage();
    }
})


function showLastMessage() {
    if (!inputValue.value) {
        alert.classList.add("show");
        setTimeout(removeShowClass, 2000);
    } else {
        lastMessage.innerHTML = inputValue.value;
        inputValue.value = "";
    }

}

function removeShowClass() {
    alert.classList.remove("show");
}