
// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo
function adicionarAmigo() {
    
    const input = document.getElementById('amigo');// Captura o valor do campo de entrada
    const nome = input.value.trim(); // Remove espaços em branco no início e no fim

    // Validar a entrada
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return; // Interrompe a execução se o campo estiver vazio
    }

    amigos.push(nome); // Adiciona o nome ao array de amigos

    input.value = ""; // Limpa o campo de entrada

    atualizarListaAmigos(); // Atualiza a lista de amigos exibida na página
}

// Função para atualizar a lista de amigos na página
function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ""; // Limpa a lista atual

    // Adiciona cada amigo à lista
    amigos.forEach(amigo => {
        const itemLista = document.createElement('li');
        itemLista.textContent = amigo;
        listaAmigos.appendChild(itemLista);
    });
}
// Função para sortear um amigo
function sortearAmigo() {
    // Verifica se há amigos disponíveis
    if (amigos.length === 0) {
        alert("Todos os amigos já foram sorteados.");
        return; // Interrompe a execução se o array estiver vazio
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length); // Gera um índice aleatório
    const nomeSorteado = amigos[indiceAleatorio]; // Obtém o nome sorteado

    // Remove o amigo sorteado do array
    amigos.splice(indiceAleatorio, 1);

    // Mostra o resultado na página
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = `<li>O amigo secreto sorteado é: ${nomeSorteado}</li>`;

    // Atualiza a lista de amigos exibida na página
    atualizarListaAmigos();
}