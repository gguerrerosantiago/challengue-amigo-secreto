// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Array global para acumular los amigos
let friends = [];
function agregarAmigo(){

    //Capturamos el valor del campo de entrada
    let input = document.getElementById("amigo");//input del html
    let name = input.value.trim();//trim para eliminar espacios en blanco al inicio y al final

    //Validamos la entrada
    if(name === ""){
        alert("Por favor inserte un nombre.");
        return;
    }

    //Agregamos el nombre al array de amigos
    friends.push(name);

    //Actualizamos la lista en el HTML
    actualizarLista();

    //Limpiamos el campo de entrada
    limpiarCampoEntrada(input);

}

function limpiarCampoEntrada(input){
    input.value = "";
}

function actualizarLista(){

    let lista = document.getElementById("listaAmigos");

    //Limpiamos la lista antes de actualizarla
    lista.innerHTML = "";

    for(let i = 0; i < friends.length; i++) {
        let li = document.createElement("li");
        li.textContent = friends[i];
        lista.appendChild(li);
    }

}