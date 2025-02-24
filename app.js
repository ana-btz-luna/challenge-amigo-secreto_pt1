//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

let amigoAdicionado = document.getElementById("amigo");
let listaAmigos = document.getElementById("listaAmigos");
let resultado = document.getElementById("resultado");

function adicionarAmigo() {
    let nomeDoAmigo = amigoAdicionado.value.trim();
    
    if (nomeDoAmigo === "" || amigos.includes(nomeDoAmigo)) {
        alert("Nome inválido ou já adicionado.");
        return;
    }

    amigos.push(nomeDoAmigo);
    amigoAdicionado.value = "";
    atualizarListaAmigos();
}

function atualizarListaAmigos() {
    listaAmigos.innerHTML = "";
    amigos.forEach((nome) => {
        let itemLista = document.createElement("li");
        itemLista.textContent = nome;
        listaAmigos.appendChild(itemLista);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos dois nomes para sortear.");
        return;
    }
    
    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    resultado.textContent = amigos[indiceSorteado];
}