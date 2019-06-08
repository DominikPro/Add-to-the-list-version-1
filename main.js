let input = document.querySelector('input');
const form = document.querySelector('form');
let taskNumber = document.querySelector('h1 span');
let listItems = document.getElementsByClassName('task');
let ul = document.querySelector('ul');


const removeTask = (e) => {
    e.target.parentNode.remove();
    taskNumber.textContent = listItems.length;
}

const addTask = (e) => {
    e.preventDefault();
    let titleTask = input.value;
    if (titleTask === "") return;
    const task = document.createElement('li');
    task.className = "task";
    task.innerHTML = titleTask + "<button>USUŃ</button>";
    ul.appendChild(task);
    input.value = "";
    taskNumber.textContent = listItems.length;
    task.querySelector('button').addEventListener('click', removeTask);
}

form.addEventListener('submit', addTask);