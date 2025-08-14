// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//crear array para guardar participantes ingresados
let amigos = [];

function agregarAmigo(){
    //ver si sirve el boton de añadir
    //alert(document.getElementById('amigo').value);

    //obtener participante desde el input amigo de html
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

    // Recorrer el array amigos con un bucle for para agregarlos a la lista uno por uno
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li"); // Crear <li> de html
        li.textContent = amigos[i]; // Asignar texto
        listaParticipantes.appendChild(li); // Agregarlo al <ul> de html
    }
}

function sortearAmigo(){
    //ver si sirve el boton de sortear amigo
    //alert("Estas a punto de saber quien es tu amigo secreto...");
    if (amigos < 2 ){
        alert("Aún no has añadido suficientes participantes");
        return;
        //validar que por lo menos haya dos amigos disponibles para sortear
    }  

    //sorteamos el indice del array amigos
    let indiceAmigo = Math.floor(Math.random() * amigos.length);

    //variable para guardar el indice del amigo sorteado
    let amigoSorteado = amigos[indiceAmigo];

    //muestra el amigo sorteado en el html
    document.getElementById('resultado').innerHTML = "Tu amigo secreto es: " + amigoSorteado ;


    // Eliminar al amigo sorteado del array
    /*amigos.splice(indiceAmigo, 1);
    if (amigos == ""){
        alert("Ya sorteaste todos los amigos disponibles, recarga la página para inciar un nuevo sorteo")
    }*/
}
