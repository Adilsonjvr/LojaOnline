// Lista de produtos
const produtos = [
    { id: 1, nome: "Whey Protein", preco: 99.99 },
    { id: 2, nome: "Creatina", preco: 29.99 },
    { id: 3, nome: "Glutamina", preco: 39.99 },
    { id: 4, nome: "Multivitamínico", preco: 49.99 },
    { id: 5, nome: "Pré-Workout", preco: 79.99 },
    { id: 6, nome: "Barras de Proteína", preco: 29.99 },
    { id: 7, nome: "Beta Alanina", preco: 44.99 },
];

// Variável para armazenar os itens do carrinho
let carrinho = [];

// Função para limpar a seção de produtos
function limparProdutos() {
    const produtosContainer = document.getElementById("produtos");
    produtosContainer.innerHTML = "";
}

// Função para adicionar um produto ao carrinho
function adicionarAoCarrinho(idProduto) {
    // Encontra o produto pelo ID
    const produto = produtos.find(item => item.id === idProduto);

    // Adiciona o produto ao carrinho
    carrinho.push({...produto, quantidade: 1});

    // Atualiza o conteúdo do carrinho na página
    atualizarCarrinho();
}

// Função para remover um item do carrinho
function removerDoCarrinho(idProduto) {
    carrinho = carrinho.filter(item => item.id !== idProduto);
    atualizarCarrinho();
}

// Função para limpar o carrinho
function limparCarrinho() {
    carrinho = [];
    atualizarCarrinho();
}

// Função para finalizar a compra
function finalizarCompra() {
    // Aqui você pode adicionar a lógica para finalizar a compra, como enviar os dados para o backend, etc.
    // Por enquanto, vamos apenas limpar o carrinho
    limparCarrinho();
    alert("Compra finalizada com sucesso!");
}

// Função para atualizar o conteúdo do carrinho na página
function atualizarCarrinho() {
    const carrinhoContainer = document.getElementById("carrinho-container");
    const totalCompraElement = document.getElementById("total-compra");
    carrinhoContainer.innerHTML = "";
    let totalCompra = 0;

    carrinho.forEach(item => {
        const itemHTML = `
            <div class="item-carrinho">
                <div>${item.nome} - R$ ${item.preco.toFixed(2)}</div>
                <button onclick="removerDoCarrinho(${item.id})">Remover</button>
            </div>
        `;
        carrinhoContainer.insertAdjacentHTML("beforeend", itemHTML);
        totalCompra += item.preco * item.quantidade;
    });

    totalCompraElement.textContent = `Total: R$ ${totalCompra.toFixed(2)}`;
}

// Adiciona os event listeners para os botões
document.getElementById("limpar-carrinho").addEventListener("click", limparCarrinho);
document.getElementById("finalizar-compra").addEventListener("click", finalizarCompra);

// Antes de inserir os produtos novamente, limpe a seção de produtos
limparProdutos();

// Insira os produtos na seção de produtos
const produtosContainer = document.getElementById("produtos");
produtos.forEach(produto => {
    const produtoHTML = `
        <div class="produto">
            <img src="https://via.placeholder.com/300x300" alt="${produto.nome}" class="w-48 h-48 rounded-full mb-4 hover:opacity-80 transition duration-300">
            <div class="overlay absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
                <button class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mt-2 transition duration-300" onclick="adicionarAoCarrinho(${produto.id})">Adicionar ao Carrinho</button>
            </div>
            <h2 class="text-xl font-bold mb-2">${produto.nome}</h2>
            <p class="text-gray-600 text-center mb-2">R$ ${produto.preco.toFixed(2)}</p>
        </div>
    `;
    produtosContainer.insertAdjacentHTML("beforeend", produtoHTML);
});
