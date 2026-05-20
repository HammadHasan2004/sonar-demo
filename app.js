var tasks = [];  // bad: using var

function addTask() {
  var input = document.getElementById("taskInput");
  var task = input.value;

  if (task == "") {   // bad: == instead of ===
    alert("Please enter a task");
    return;
  }

  tasks.push(task);
  renderTasks();
  input.value = "";
}

function renderTasks() {
  var list = document.getElementById("taskList");
  list.innerHTML = "";

  for (var i = 0; i < tasks.length; i++) {   // bad: var in loop
    var li = document.createElement("li");
    li.innerHTML = tasks[i];    // bad: XSS risk - should use textContent
    var btn = document.createElement("button");
    btn.innerHTML = "Delete";
    btn.onclick = function() {  // bad: function inside loop
      deleteTask(i);
    };
    li.appendChild(btn);
    list.appendChild(li);
  }
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

function unusedFunction() {   // bad: dead code
  console.log("this is never called");
}