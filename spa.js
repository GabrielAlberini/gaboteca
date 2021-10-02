window.addEventListener('hashchange', () => {
    console.log(window.location.hash)
    router(window.location.hash);
})

let content = document.getElementById("app");

const router = (hash) => {
    switch(hash) {
        case '#/': {
            return console.log("Estas en la home")
        }
        case '#/tasks': {
            return console.log("Estas en tareas.")
        }
        case '#/verproyectos': {
            content.appendChild(traerDatos)
            return console.log("Estas en proyectos.")
        }
        default:
            return;
    }
}