let amigos = [];

//funcion para agregar el amigo ingresado por el usuario a una lista (amigos)
function agregarAmigo(listaAmigos){
    let amigo = document.getElementById('amigo').value;
    if( amigo.trim() == ''){
        alert('por favor, inserte un nombre.');
    }else{
        listaAmigos.push(amigo);
        mostrarLista();
    }
    limpiarCaja('amigo');
    console.log(amigos);
}

//funcion para limpiar el campo de entrada del usuario
function limpiarCaja(elemento){
    document.getElementById(elemento).value = '';
}


//funcion para mostrar la lista de amigos
function mostrarLista(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for(let i = 0; i<amigos.length ;i++){
        let li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li)
    }
}

//funcion para sortear demanera aleatoria 
function sortearAmigo(listaAmigos){
    if(listaAmigos.length === 0){
        alert('No hay amigos para poder sortear');
    }else{
        let amigoSorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
        let lista = document.getElementById('listaAmigos');
        lista.innerHTML = amigoSorteado;  

    }
}