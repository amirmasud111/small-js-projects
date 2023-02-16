let slots = document.querySelectorAll(".slot");

let player = "×"; // first player to start





slots.forEach(slot => {
    slot.addEventListener("click", e => {
        if (e.target.innerText) return;
        slot.innerText = player;
        if (checkWin(slots)) {
            let winCondition = checkWin(slots);

            for (i = 0; i < winCondition.length; i++) {
                console.log(slots[winCondition[i]]);
                slots[winCondition[i]].style.backgroundColor = "#0681e6";
            }
            setTimeout(alertBox, 0, player, " win");

        } else if (Array.from(slots).findIndex(slot => slot.innerText == "") == -1) {
            setTimeout(alertBox, 0, player, " draw");
        }
        player == "×" ? player = "○" : player = "×";

    })
});

function alertBox(player, msg) {
    alert(player + msg);
    location.reload();
}

function checkWin(slots) {
    let winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let winCondition of winConditions) {
        if (slots[winCondition[0]].innerText == slots[winCondition[1]].innerText &&
            slots[winCondition[1]].innerText == slots[winCondition[2]].innerText &&
            slots[winCondition[0]].innerText != "") {
            return winCondition;
        }

    }
    return false
}