let input = document.querySelector("input");
let addBtn = document.querySelector(".add-btn");
let clearBtn = document.querySelector(".clear-btn");
let list = document.querySelector("ul");
let alert = document.querySelector(".alert")

let itemsList = JSON.parse(localStorage.getItem("itemsList")) || [];

if (itemsList.length) {
    list.innerHTML = "";
    itemsList.forEach(item => {
        list.appendChild(createLi(item.value, item.condition));
    })
}

addBtn.addEventListener("click", e => {
    if (!input.value) {
        alert.style.display = "block";
        setTimeout(() => {
            alert.style.display = "none";
        }, 3000);
    } else {
        let listItemsInfo = new ListItemsInfo(input.value, false)
        itemsList.push(listItemsInfo);
        localStorage.setItem("itemsList", JSON.stringify(itemsList));
        list.innerHTML = "";
        itemsList.forEach(item => {
            list.appendChild(createLi(item.value, item.condition));
        })
        input.value = "";
    }

})



list.addEventListener("click", e => {

    if (e.target.classList.contains("fa-times-circle")) {
        let index = Array.from(list.children).findIndex(item => item == e.target.parentNode);
        itemsList.splice(index, 1);
        e.target.parentNode.remove();
    } else if (e.target.classList.contains("fa-check-circle")) {
        e.target.classList.toggle("done-icon");
        if (e.target.classList.contains("done-icon")) {
            let index = Array.from(list.children).findIndex(item => item == e.target.parentNode);
            itemsList[index].condition = true;
        }
        e.target.parentNode.firstChild.classList.toggle("done-item");
    } else if (e.target.classList.contains("fa-edit")) {
        input.value = e.target.parentNode.firstChild.innerText;
        e.target.parentNode.remove();
        let index = Array.from(list.children).findIndex(item => item == e.target.parentNode);
        itemsList.splice(index, 1);
    }

    localStorage.setItem("itemsList", JSON.stringify(itemsList));
})



clearBtn.addEventListener("click", () => {
    Array.from(list.children).forEach(child => {
        child.remove();
    })
    itemsList = [];
    localStorage.setItem("itemsList", JSON.stringify(itemsList));
})



function createLi(input, condition) {

    let li = document.createElement("li");
    let span = document.createElement("span");
    span.classList.add("title");
    span.innerText = input;
    let check = document.createElement("i");
    check.classList.add("fa", "fa-check-circle");
    let edit = document.createElement("i");
    edit.classList.add("fa", "fa-edit");
    let remove = document.createElement("i");
    remove.classList.add("fa", "fa-times-circle");

    if (condition) {
        check.classList.add("done-icon");
        span.classList.add("done-item");
    }


    li.appendChild(span);
    li.appendChild(check);
    li.appendChild(edit);
    li.appendChild(remove);

    return li;
}

function ListItemsInfo(value, condition) {
    this.value = value;
    this.condition = condition;
}
