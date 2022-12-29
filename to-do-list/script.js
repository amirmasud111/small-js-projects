let input = document.querySelector("input");
let addBtn = document.querySelector(".add-btn");
let clearBtn = document.querySelector(".clear-btn");
let list = document.querySelector("ul");
let alert = document.querySelector(".alert")



addBtn.addEventListener("click", e => {
    if (!input.value) {
        alert.style.display = "block";
        setTimeout(() => {
            alert.style.display = "none";
        }, 3000);
    } else {
        list.appendChild(createLi(input.value))
        input.value = "";
    }

})

list.addEventListener("click", e => {

    if (e.target.classList.contains("fa-times-circle")) {
        e.target.parentNode.remove();
    } else if (e.target.classList.contains("fa-check-circle")) {
        e.target.classList.toggle("done-icon");
        e.target.parentNode.firstChild.classList.toggle("done-item")
    } else if (e.target.classList.contains("fa-edit")) {
        input.value = e.target.parentNode.firstChild.innerText;
        e.target.parentNode.remove();
    }
})



clearBtn.addEventListener("click", () => {
    Array.from(list.children).forEach(child => {
        child.remove();
    })
})



function createLi(input) {

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

    li.appendChild(span);
    li.appendChild(check);
    li.appendChild(edit);
    li.appendChild(remove);

    return li;
}
