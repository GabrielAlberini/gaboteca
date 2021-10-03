$('#formTask').on('submit', saveTask); 
$( "#botonTasks" ).click(mostrarContenidoTasks);
$('#botonHome').click(mostrarContenidoHome)

let mostrarContenidoTask = false;

function mostrarContenidoTasks() {

  if (mostrarContenidoTask == false) {
    $("#container-tasks").show();
    mostrarContenidoTask = true;
  } else {
    $("#container-tasks").hide();
    mostrarContenidoTask = false;
  }

  console.log("¡Página TASKS cargada con exito!")
}

function saveTask(e) {
  let title = $('#title').val(); 
  let description = $('#description').val();
  console.log(description)

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
  $('#formTask').reset();
  e.preventDefault();
}

function deleteTask(title) {
  let tasks = JSON.parse(localStorage.getItem('tasks'));
  for(let i = 0; i < tasks.length; i++) {
    if(tasks[i].title == title) {
      tasks.splice(i, 1);
    }
  }
  
  localStorage.setItem('tasks', JSON.stringify(tasks));
  getTasks();
}

function getTasks() {
  let tasks = JSON.parse(localStorage.getItem('tasks'));
  let tasksView = document.getElementById('tasks');

  $('#tasks').html('');

  for(let i = 0; i < tasks.length; i++) {
    let title = tasks[i].title;
    let description = tasks[i].description;

    tasksView.innerHTML += `<div class="card mb-3">
        <div class="card-body d-flex justify-content-between">
          <p>${title} - ${description}</p>
          <a href="#" onclick="deleteTask('${title}')" class="btn btn-outline-danger">Listo el pollo</a>
        </div>
      </div>`;
  }
}

function mostrarContenidoHome() {

  let presentacion = document.querySelector('#presentacion');

  presentacion.innerHTML = `
    <p class="text-center pt-5">¡Hola! terricola, en esta aplicación tu podrás aprender a organizarte. En la pestaña <strong>tareas</strong> podrás poner en orden tus obligaciones diarias o dejar también, algún recordatorio. Por otra parte, y como veras, en la pestaña <strong>ver proyectos</strong> tendrás una breve descripción de cuales son los proyectos mas importantes del desarrollador de esta app: <a class="link-ga" href="https://www.linkedin.com/in/gabriel-alberini/"><strong>Gabriel Alberini</strong></a>. Sin nada mas que decir, ¡que la disfrutes! 🚀</p>
  `

  if (mostrarContenido == false) {
    $("#presentacion").show();
    mostrarContenido = true;
  } else {
    $("#presentacion").hide();
    mostrarContenido = false;
  }

  console.log("¡Página HOME cargada con exito!")
}


getTasks();