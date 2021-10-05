
///////// VIEW HOME /////////////
const viewHome = () => {
    const views = `<p class="text-center pt-5">¡Hola! terricola, en esta aplicación tu podrás aprender a organizarte. En la pestaña <strong>tareas</strong> podrás poner en orden tus obligaciones diarias o dejar también, algún recordatorio. Por otra parte, y como veras, en la pestaña <strong>ver proyectos</strong> tendrás una breve descripción de cuales son los proyectos mas importantes del desarrollador de esta app: <a class="link-ga" href="https://www.linkedin.com/in/gabriel-alberini/"><strong>Gabriel Alberini</strong></a>. Sin nada mas que decir, ¡que la disfrutes! 🚀</p>`
    
    const divHome = document.createElement('div');

    divHome.id = 'presentacion';
    
    divHome.innerHTML = views;
    
    return divHome; 
}

///////// VIEW TASKS ////////////
const viewTask = () => {
    const views = `<div class="container bg-light">
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
    </div>`

    const divTask = document.createElement('div');

    divTask.id = 'container-tasks';
    
    divTask.innerHTML = views;

    return divTask;

}

///////// VIEW PROJECT //////////
const viewProjects = () => {
    const views = `
        <div class="pt-5">
        <div class="row mx-md-n5">
            <div id="tableTitle" class="col px-md-0"></div>
            <div class="col px-md-5">  
            </div>
        </div>        
        <table class="table">
            <thead id="thead">
            </thead>
            <tbody id="tbody">
            </tbody>
        </table>
        </div>`
    
    const divProjects = document.createElement('div');
    
    divProjects.innerHTML = views;

    divProjects.id = 'container-table';
    
    return divProjects; 
}

const error = () => {
    const views = `<div class="form-row text-center pt-3">
    <div class="col-12">
        <p class="text-danger" style="font-size: 100px">Error 404</p>
    </div>`

    const divError = document.createElement('div');
    
    divError.innerHTML = views;

    divError.id = 'error';
    
    return divError;
}