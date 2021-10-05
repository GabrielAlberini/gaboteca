window.addEventListener('hashchange', () => {
    router(window.location.hash);
})

let content = document.getElementById("app");


const router = (hash) => {

    content.innerHTML = "";
    
    switch (hash) {
        case '#/': {
            content.appendChild(viewHome());
            return console.log("Estás en HOME.");
        }
        case '#/tasks': {
            content.appendChild(viewTask());
            return console.log("Estas en TASKS");
        }
        case '#/viewProjects': {
            content.appendChild(viewProjects());
            return console.log("Estas en PROJECTS");
        }
        default:
            content.appendChild(error());
            return console.log("Error 404.")
    }
}