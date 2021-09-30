$( "#boton" ).click(traerDatos);

let mostrarContenido = false;

function traerDatos() {
    
    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'annualsProjects.json', true);

    xhttp.send();

    xhttp.onreadystatechange = function () {
        
        if (this.readyState == 4 && this.status == 200) {

            let datos = JSON.parse(this.responseText);

            let projects = document.querySelector('#tbody');

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
        $("#tbody").show();
        mostrarContenido = true;
    } else {
        $("#tbody").hide();
        mostrarContenido = false;
    }
}


