// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){
    //ver si sirve el boton
    //alert(document.getElementById('amigo').value);
    let participante = document.getElementById('amigo').value;

    //validar entrada de participante
    if (participante == "") {
        alert("Por favor, inserte un nombre.");
    } else {
        alert("Participante ingresado");
        amigos.push(participante);
        console.log(amigos);
        mostrarListaEnHtml();
    }
    limpiarCaja();
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

function mostrarListaEnHtml(){
    //Obtener el elemento de la lista html y asignarle una variable
    let listaParticipantes = document.getElementById('listaAmigos');
    //Limpiar la lista existente para evitar agregar participantes ya ingresados
    listaParticipantes.innerHTML = "";

    // Recorrer el array amigos con un bucle for
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li"); // Crear <li>
        li.textContent = amigos[i]; // Asignar texto
        listaParticipantes.appendChild(li); // Agregarlo al <ul>
    }
}

function sortearAmigos(){
    
}