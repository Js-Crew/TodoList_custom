// window.addEventListener('load')
let addBtn = document.querySelector(".addBtn");
let taskList = document.querySelector("ul");
let input = document.querySelector("input");
let tasks;
if (!localStorage.getItem("todo")) {
  tasks = [];
} else {
  tasks = getTasks();
}
addBtn.addEventListener("click", () => {
  let text = input.value;
  let task = createTask(text);
  task.innerHTML +=
    ' <span class="closeBtn"><i class="fa-solid fa-trash-can"></i></span>';
  taskList.appendChild(task);
  saveTask(text);
  input.value = "";
});

taskList.addEventListener("click", (e) => {
  if (e.target.nodeName === "I") {
    let target = e.target.parentElement.parentElement;
    target.style = "display : none";
    tasks.splice(tasks.indexOf(target.textContent), 1);
    localStorage.setItem("todo", tasks);
  }
  if (e.target.nodeName === "LI") {
    e.target.classList.toggle("done");
  }
});

function createTask(text) {
  let li = document.createElement("li");
  li.textContent = text;
  return li;
}

function saveTask(text) {
  tasks.push(text);
  localStorage.setItem("todo", tasks);
}

function getTasks() {
  return localStorage.getItem("todo").split(",");
}

function showTask() {
  for (let taskText of getTasks()) {
    let task = createTask(taskText);
    task.innerHTML +=
      '<span class="closeBtn"><i class="fa-solid fa-trash-can"></i></span>';
    taskText.appendChild(task);
  }
}
