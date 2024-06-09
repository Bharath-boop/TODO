let input = document.getElementById("input");
let list = document.getElementById("list");
let data = JSON.parse(localStorage.getItem("data")) || [];

displayTask();

function addTask() {
    let taskText = input.value.trim();
    if (taskText === "") return;
    let task = { text: taskText };
    data.push(task);
    localStorage.setItem("data", JSON.stringify(data));
    input.value = "";
    displayTask();
}

function deleteTask(index) {
    data.splice(index, 1);
    localStorage.setItem("data", JSON.stringify(data));
    displayTask();
}

function editTask(index) {
    let newTaskText = prompt("Edit Task", data[index].text);

    if (newTaskText !== null) {
        data[index].text = newTaskText;
        localStorage.setItem("data", JSON.stringify(data));
        displayTask();
    }
}

function displayTask() {
    list.innerHTML = "";
    data.forEach((e, i) => {
        let li = document.createElement("li");
        li.innerHTML = `
        <div class="card text-center">
        <div class="card-body">
            <h5 class="card-title">${e.text}</h5>
            <button type="button" class="btn btn-outline-primary"  onClick='editTask(${i})'>Edit</button>
            <button type="button" class="btn btn-outline-danger" onClick='deleteTask(${i})'>Delete</button>
        </div>
        </div>
        `
        list.appendChild(li)
    });
}