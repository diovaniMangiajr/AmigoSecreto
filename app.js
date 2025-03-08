//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let nomes = [];

function adicionarAmigo () {
    let entrada = document.getElementById('amigo');
    let texto = entrada.value;

    if (texto != "") {
        nomes.push(texto); //Salva o nome do amigo no array "nomes"
        entrada.value = ''; //Limpa campo de digitar o nome

        console.log(nomes);
    } else {
        alert('Digite um nome para adicionar');
    }
    atualizarLista();
}

function atualizarLista () {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    nomes.forEach(nomes => {
        let itemLista = document.createElement('li');
        itemLista.textContent = nomes;
        listaAmigos.appendChild(itemLista);
      });
}