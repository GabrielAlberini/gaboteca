$(document).ready(function () {
$('#formTask').on('submit', saveTask);

function saveTask(event) {
  let title = $('#title').val(); 
  let description = $('#description').val();
  const task = {
    _title: title,
    _description: description
  }
  if (localStorage.getItem('tasks') === null) {
    let tasks = [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  } else {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  getTask();
  $('#formTask').reset();
  event.preventDefault();
}

function getTask(){
  let tasks = JSON.parse(localStorage.getItem('tasks'));
  $('#tasks').html('');

  for (let i = 0; i < tasks.length; i++){
    let title = tasks[i]._title;
    let description = tasks[i]._description;
    
    $('#tasks').html(`<div class="card mb-3">
    <div class="card-body">
    <p>${title} - ${description}</p>
    <a class="btn btn-danger" onclick="deleteTask('${title}')">
    Listo el pollo
    </a>
    </div>
    </div>`); 
  }
}

function deleteTask(title) {
  let tasks = JSON.parse(localStorage.getItem('tasks'));
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].title == title) {
      tasks.splice(i, 1)
    }
  }
  localStorage.setItem('tasks', JSON.stringify(tasks));
  getTask();
}

getTask();

});