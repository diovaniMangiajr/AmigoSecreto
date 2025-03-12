let nomes = [];

function adicionarAmigo () {
    let entrada = document.getElementById('amigo');
    let texto = entrada.value;

    if (texto != "") {
        nomes.push(texto);
        entrada.value = '';

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

function sortearAmigo() {
    let listaSorteada = document.getElementById("resultado");
    listaSorteada.innerHTML = '';

    if (!nomes || nomes.length === 0) {
        alert('A lista de amigos está vazia');
    }
    let indiceAleatorio = Math.floor(Math.random() * nomes.length);
    let amigoSorteado = nomes[indiceAleatorio];
    nomes.splice(indiceAleatorio, 1);

    let resultadoSorteio = document.createElement("li");
    resultadoSorteio.textContent = amigoSorteado;
    
    listaSorteada.appendChild(resultadoSorteio);
    atualizarLista();
}