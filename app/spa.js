
window.addEventListener('hashchange', () => {
    router(window.location.hash);
})

let content = document.getElementById("app");


const router = (hash) => {

    content.innerHTML = "";
    
    switch (hash) {
        case '#/hello': {
            content.appendChild(viewHome());
            return console.log("Estás en HELLO");
        }
        case '#/projects': {
            content.appendChild(viewProjects());
            return console.log("Estas en PROJECTS");
        }
        case '#/contact': {
            content.appendChild(viewContact());
            return console.log("Estas en CONTACT");
        }
        case '#/skills': {
            content.appendChild(viewSkills());
            return console.log("Estas en SKILLS");
        }
        default:
            window.location.reload();
            return console.log("La página no se encuentra, volviste al comienzo.");
    }
}