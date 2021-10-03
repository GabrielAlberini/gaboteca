$( "#botonProyectos" ).click(traerDatos);

let mostrarContenido = false;

function traerDatos() {
    
    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'annualsProjects.json', true);

    xhttp.send();

    xhttp.onreadystatechange = function () {
        
        if (this.readyState == 4 && this.status == 200) {

            let datos = JSON.parse(this.responseText);

            let tableTitle = document.querySelector('#tableTitle');
            let theadProjects = document.querySelector('#thead');
            let projects = document.querySelector('#tbody');

            tableTitle.innerHTML = `
                <h2 class="navbar-brand pb-3">Proyectos <span class="text-dark bg-warning">importantes<span></h2>
            `
            theadProjects.innerHTML = `
                <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Costo ($)</th>
                    <th scope="col">¿Qué necesito?</th>
                    <th scope="col">Fecha a realizarse</th>
                </tr>
            `
            projects.innerHTML = '';

            for (let project of datos) {

                projects.innerHTML += `
                <tr>
                    <th scope="row">${project.Nombre}</th>
                    <td>${project.Costo}</td>
                    <td>${project.Necesidades}</td>
                    <td>${project.Fecha}</td>
                </tr>
                `                
            }
            
        } 

    }
    if (mostrarContenido == false) {
        $("#tableTitle").show();
        $("#thead").show();
        $("#tbody").show();
        mostrarContenido = true;
    } else {
        $("#tableTitle").hide();
        $("#thead").hide();
        $("#tbody").hide();
        mostrarContenido = false;
    }
}


