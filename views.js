
///////// VIEW HOME /////////////
const viewHome = () => {
    const views = `<p class="text-center pt-5">¡Hola! ¿Cómo estás? Espero que muy bien 🥳. Bienvenida/o a la <strong>Gaboteca</strong>. Aquí encontraras una gran herramienta para que puedas organizarte mejor. Por un lado, esta la aplicación en sí, donde podrás agendarte recordatorios u obligaciones que tengas que cumplir.<br><br>
    Luego en el botón titulado <strong>Ver proyectos</strong> descubrirás una lista de las próximas metas a largo plazo del desarrollador de esta app: Gabriel Alberini 😎<br><br>
    Llegando al final, en el apartado de <strong>Skills</strong>, encontrarás un detallado de cuales fueron las herramientas utilizadas para la fabricación de todo lo que ves.<br><br>
    Y, por último, si quieres dejarme un mensaje, lo puede hacer a través de la pestaña <strong>¡Contactarme contigo!</strong><br><br>
    Nada más por decir. Que lo disfrutes. 
    </p>`
    
    const divHome = document.createElement('div');

    divHome.id = 'presentacion';
    
    divHome.innerHTML = views;
    
    return divHome; 
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
        <table class="table table-responsive">
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

///////// VIEW SKILLS //////////

const viewSkills = () => {
    const views = `
    <div class="jumbotron pt-5">
        <h3 class="display-4">Bootstrap</h3>
        <p class="lead">A la hora de decidir como se vería la interfaz de la aplicación no dude ni un segundo en que usaría Bootstrap. Es dinámico, facil de implemental y bonito a la vista. ¡Aguante Bootstrap!</p>
        <hr class="my-4">
        <p class="lead">
            <a class="btn btn-primary btn-sm" href="https://getbootstrap.com/" role="button">Ir a Bootstrap</a>
        </p>
        <h3 class="display-4">JavaScript</h3>
        <p class="lead">JavaScript fue implementado en el proyecto para realizar la funcionalidad del mismo y generar la lógica en el almacenamiento de los datos.</p>
        <hr class="my-4">
        <p class="lead">
            <a class="btn btn-primary btn-sm" href="https://www.javascript.com/" role="button">Ir a JavaScript</a>
        </p>
        <h3 class="display-4">JQuery</h3>
        <p class="lead">Esta biblioteca me permitio comprender de manera rápida algunos conceptos de JS. Su abreviación en la escritura de código es sencilla e intuitiva a la hora de leer.</p>
        <hr class="my-4">
        <p class="lead">
            <a class="btn btn-primary btn-sm" href="https://jquery.com/" role="button">Ir a JQuery</a>
        </p>
        <h3 class="display-4">JSON</h3>
        <p class="lead">JSON es una forma muy fácil de escribir, almacenar e intercambiar datos. A pasar que dentro del proyecto su utilización no es demaciado amplia y aprovechada, se que tiene un gran uso dentro del Desarrollo Web. En esta ocación implementé este formato en el apartado Proyectos realizando una lista de tareas por hacer.</p>
        <hr class="my-4">
        <p class="lead">
            <a class="btn btn-primary btn-sm" href="https://www.json.org/json-es.html" role="button">Ir a JSON</a>
        </p>
        <h3 class="display-4">SPA JS</h3>
        <p class="lead">Me gusto mucho aprender a usar esta herramienta. Aunque mi camino recien comienza en el mundo del desarrollo, alcance a ver la potencialidad de ésta herramienta. En la <strong>Gaboteca</strong> fue utilizada para interactuar entre las distintas vistas que obrecen los botones en el encabezado. Cada botón genera un "hash" que orienta al usuario en la vista del contenido.</p>
        <hr class="my-4">
        <p class="lead">
            <a class="btn btn-primary btn-sm" href="https://single-spa.js.org/" role="button">Ir a SPA JS</a>
        </p>
    </div>
    `
    
    const divSkills = document.createElement('div');

    divSkills.id = 'presentacion';
    
    divSkills.innerHTML = views;
    
    return divSkills; 
}

///////// VIEW CONTACT //////////

const viewContact = () => {
    const contact = `
    <div class="row mt-5">
        <div class="container bg-ligth col-md-4">
            <form id="contactForm">

                <div class="mb-3">
                    <label class="form-label" for="name">¿Cómo te llamas?</label>
                    <input class="form-control" id="name" type="text" placeholder="Nombre." required />
                </div>
                <div class="mb-3">
                    <label class="form-label" for="emailAddress">¡Cuál es tu correo electrónico?</label>
                    <input class="form-control" id="emailAddress" type="email" placeholder="Email." required />
                </div>
                <div class="mb-3">
                    <label class="form-label" for="message">¿Tienes un mensaje para mí?</label>
                    <textarea class="form-control" id="message" type="text" placeholder="Mensaje." style="height: 10rem;" required></textarea>
                </div>
                <div class="d-grid">
                <button class="btn btn-outline-primary btn-lg" type="submit">Enviar</button>
                </div>
            </form>
        </div>
        <div class="cont-img-contact col-md-8 d-flex justify-content-end">
            <img src="img/original-edicion.png" class="imagen-contact img-fluid" alt="imagen de onda">
        <div class="popMsj">¡Gracias por contactarte conmigo!<br>Me comunicaré a la brevedad.</div>
        </div>
    </div>
    `
    const contContact = document.createElement('div');
    
    contContact.innerHTML = contact;

    contContact.id = 'container-contact';
    
    return contContact;
}