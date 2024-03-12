const produtos = [
    { id: 1, nome: "Whey Protein", preco: 99.99 },
    { id: 2, nome: "Creatina", preco: 29.99 },
    { id: 3, nome: "Glutamina", preco: 39.99 },
    { id: 4, nome: "Multivitamínico", preco: 49.99 },
    { id: 5, nome: "Pré-Workout", preco: 79.99 },
    { id: 6, nome: "Barras de Proteína", preco: 29.99 },
    { id: 7, nome: "Beta Alanina", preco: 44.99 },
];

let carrinho = [];

// JavaScript para mostrar/ocultar a barra lateral do carrinho
const mostrarSidebarBtn = document.getElementById("mostrar-sidebar");
const esconderSidebarBtn = document.getElementById("esconder-sidebar");
const sidebar = document.getElementById("sidebar");
const produtosSection = document.getElementById("produtos");

mostrarSidebarBtn.addEventListener("click", () => {
    sidebar.classList.add("open");
    produtosSection.classList.add("sidebar-aberta"); // Adiciona a classe para recuar os produtos
});

esconderSidebarBtn.addEventListener("click", () => {
    sidebar.classList.remove("open");
    produtosSection.classList.remove("sidebar-aberta"); // Remove a classe para recuar os produtos
});

// Função para adicionar item ao carrinho
function adicionarAoCarrinho(nomeProduto, precoProduto) {
    // Verificar se o produto já está no carrinho
    const produtoExistente = carrinho.find((item) => item.nome === nomeProduto);

    if (produtoExistente) {
        // Se o produto já estiver no carrinho, incrementar a quantidade
        produtoExistente.quantidade++;
    } else {
        // Se o produto não estiver no carrinho, adicioná-lo
        carrinho.push({
            nome: nomeProduto,
            preco: precoProduto,
            quantidade: 1,
        });
    }

    // Atualizar a lista do carrinho
    atualizarCarrinho();

    // Calcular e exibir o total do carrinho
    calcularTotalCarrinho();

    // Armazenar os itens do carrinho na sessão ou local storage
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
}

// Função para atualizar a lista do carrinho
function atualizarCarrinho() {
    const carrinhoLista = document.getElementById("carrinho-lista");

    // Limpar a lista do carrinho
    carrinhoLista.innerHTML = "";

    // Adicionar os itens do carrinho à lista
    carrinho.forEach((item, index) => {
        const itemHTML = `
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    ${item.nome} - R$ ${item.preco} x ${item.quantidade}
                    <div>
                        <button class="btn btn-sm btn-secondary btn-quantidade" onclick="diminuirQuantidade(${index})">-</button>
                        <span class="badge bg-light text-dark">${item.quantidade}</span>
                        <button class="btn btn-sm btn-secondary btn-quantidade" onclick="adicionarQuantidade(${index})">+</button>
                        <button class="btn btn-sm btn-danger" onclick="removerItemDoCarrinho(${index})">Remover</button>
                    </div>
                </li>
            `;
        carrinhoLista.insertAdjacentHTML("beforeend", itemHTML);
    });
}

// Função para calcular e exibir o total do carrinho
function calcularTotalCarrinho() {
    const totalCarrinho = carrinho.reduce(
        (total, item) => total + item.preco * item.quantidade,
        0,
    );
    const totalCarrinhoElement = document.getElementById("total-carrinho");
    if (totalCarrinhoElement) {
        // Verificar se o elemento existe antes de tentar acessá-lo
        totalCarrinhoElement.textContent = `Total: R$ ${totalCarrinho.toFixed(
            2,
        )}`;
    }
}

// Função para remover um item do carrinho
function removerItemDoCarrinho(index) {
    carrinho.splice(index, 1);
    // Atualizar a lista do carrinho
    atualizarCarrinho();
    // Calcular e exibir o total do carrinho
    calcularTotalCarrinho();
}

// Função para diminuir a quantidade do item no carrinho
function diminuirQuantidade(index) {
    if (carrinho[index].quantidade > 1) {
        carrinho[index].quantidade--;
        atualizarCarrinho();
        calcularTotalCarrinho();
    }
}

// Função para adicionar a quantidade de um item no carrinho
function adicionarQuantidade(index) {
    carrinho[index].quantidade++;
    // Atualizar a lista do carrinho
    atualizarCarrinho();
    // Calcular e exibir o total do carrinho
    calcularTotalCarrinho();
}

// Função para redirecionar para a página de carrinho de compras
function revisarPedido() {
    // Redirecionar para a página de carrinho de compras
    window.location.href = "carrinho-de-compras.html";
}

// Adicionar um ouvinte de evento ao botão "Revisar Pedido"
const revisarPedidoBtn = document.getElementById("revisar-pedido");
revisarPedidoBtn.addEventListener("click", revisarPedido);
