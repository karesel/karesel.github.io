// js structure to save in memory

let todos = {};
todos.todo  = [];
todos.doing = [];
todos.done  = [];

dragged_el = null

function dragstart_handler(ev) { dragged_el = ev.currentTarget }

function dragover_handler(ev) { ev.preventDefault(); }

function dragend_handler(ev) { dragged_el = null }

function drop_handler(ev) {
    ev.preventDefault();
    ev.currentTarget.appendChild(dragged_el);
}

Array.from(document.getElementsByClassName("col")).forEach((el) => {
    el.addEventListener("dragover", dragover_handler)
    el.addEventListener("drop", drop_handler)
})

function addcard(btn) {
    todotext = prompt("Task:", "")
    if ((!todotext) || (todotext.trim() == "")) return
    todotext = todotext.trim()

    column = btn.parentElement.parentElement

    newcard = document.createElement("div")
    newcard.classList.add("card")
    newcard.setAttribute("draggable", "true")
    newcard.addEventListener("dragstart", dragstart_handler);
    newcard.addEventListener("dragend", dragend_handler);

    newcardtext = document.createElement("div")
    newcardtext.innerText = todotext
    newcardtext.classList.add("card-text")
    newcard.appendChild(newcardtext)

    newcarddeletebtn = document.createElement("button")
    newcarddeletebtn.innerHTML = "&cross;"
    newcarddeletebtn.classList.add("delbutton")
    newcarddeletebtn.addEventListener("click", (ev) => { ev.currentTarget.parentNode.remove() });
    newcard.appendChild(newcarddeletebtn)

    column.appendChild(newcard)

    todos
}

// todo: add double click to delete button
