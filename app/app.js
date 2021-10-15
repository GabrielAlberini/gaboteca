$('#formTask').on('submit', saveTask);

function saveTask(e) {
  let title = document.getElementById('title').value;
  let description = document.getElementById('description').value;

  let task = {
    title,
    description
  };

  if(localStorage.getItem('tasks') === null) {
    let tasks = [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  } else {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  getTasks();
  e.preventDefault();
}

function deleteTask(title) {
  let tasks = JSON.parse(localStorage.getItem('tasks'));
  for(let i = 0; i < tasks.length; i++) {
    if(tasks[i].title == title || tasks[i].title == "") {
      tasks.splice(i, 1);
    }
  }
  
  localStorage.setItem('tasks', JSON.stringify(tasks));
  getTasks();
}

function getTasks() {
  let tasks = JSON.parse(localStorage.getItem('tasks'));

  
  let tasksView = document.getElementById('tasks');
  tasksView.innerHTML = '';

  for(let i = 0; i < tasks.length; i++) {
    let title = tasks[i].title;
    if (title[i] == null) {
      title = `<p> Ups, no le haz puesto un nombre a la tarea, lince.</p>`;
    }
    let description = tasks[i].description;
    if (description[i] == null) {
      description = `<p> Ups, no haz descripto la tarea, maquinola.</p>`;
    }

    tasksView.innerHTML += `
        <div class="card mb-3">
          <div class="card-body">
            <span class="effectTxt">QUE 👇</span><p d-inline> ${title}</p>
              <span class="effectTxt">CÓMO 👇</span><p d-inline> ${description}</p>
              <a href="#" onclick="deleteTask('${title}')" class="btn btn-outline-primary mt-1">Listo el pollo</a>
          </div>
        </div>`;
  }
}

getTasks();