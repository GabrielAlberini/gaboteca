$('#formTask').on('submit', saveTask); 
$( "#botonTasks" ).click(mostrarContenido);

console.log("#botonTasks")

let mostrarContenidoTask = false;

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

function mostrarContenido() {
  let presentacion = document.querySelector('#presentacion');
  let theadProjects = document.querySelector('#container-tasks');

  presentacion.innerHTML = `
    <p class="text-center">¡Hola! terricola, en esta aplicación tu podrás aprender a organizarte. En la pestaña <strong>tareas</strong> podrás poner en orden tus obligaciones diarias o dejar también, algún recordatorio. Por otra parte, y como veras, en la pestaña <strong>ver proyectos</strong> tendrás una breve descripción de cuales son los proyectos mas importantes del desarrollador de esta app: <a class="link-ga" href="https://www.linkedin.com/in/gabriel-alberini/"><strong>Gabriel Alberini</strong></a>. Sin nada mas que decir, ¡que la disfrutes! 🚀</p>
  `
  theadProjects.innerHTML = `
  <div class="container bg-light">
                <h1 class="navbar-brand pt-5">A ver, <span class="text-dark bg-warning">Gabo</span>. ¿Pinta que te ordenes?</h1>
            </div>
            <div class="row">
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body">
                            <form id="formTask">
                                <div class="form-group">
                                    <input type="text" id="title" placeholder="¿Qué tenés que hacer?" class="form-control ">
                                </div>
                                <div class="form-group pt-3">
                                    <textarea id="description" cols="80" rows="8" style="resize: none;" class="form-control" placeholder="¿Cómo lo vas a hacer?"></textarea>
                                </div>
                                <div class="pt-3 d-grid gap-2">
                                    <button id="saveTask" type="submit" class="btn btn-dark">
                                        Recordar
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-md-8">
                    <div id="tasks"></div>
                </div>
            </div>
  `

  if (mostrarContenidoTask == false) {
    $("#presentacion").show();
    mostrarContenidoTask = true;
  } else {
    $("#presentacion").hide();
    mostrarContenidoTask = false;
  }

}


getTasks();