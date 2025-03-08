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
}

function atualizarLista () {
    
}