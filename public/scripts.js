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

// Adicionar um item ao carrinho
function adicionarAoCarrinho(nomeProduto, preco) {
    const produtoSelecionado = produtos.find(
        (produto) => produto.nome === nomeProduto,
    );

    if (produtoSelecionado) {
        const itemExistente = carrinho.find((item) => item.nome === nomeProduto);

        if (itemExistente) {
            itemExistente.quantidade++;
        } else {
            carrinho.push({ ...produtoSelecionado, preco, quantidade: 1 });
        }

        // Atualizar a lista do carrinho
        atualizarCarrinho();

        // Calcular e exibir o total do carrinho
        calcularTotalCarrinho();

        // Atualizar o armazenamento local
        localStorage.setItem("carrinho", JSON.stringify(carrinho));

        // Atualizar o valor total do carrinho na página
        atualizarTotalCarrinho();
        
    }
}

// Função para diminuir a quantidade de um item no carrinho
function diminuirQuantidade(nomeProduto) {
    const produtoExistente = carrinho.find((item) => item.nome === nomeProduto);

    if (produtoExistente) {
        if (produtoExistente.quantidade > 1) {
            produtoExistente.quantidade--;
        } else {
            // Se a quantidade for igual a 1, remover o item do carrinho
            const index = carrinho.indexOf(produtoExistente);
            carrinho.splice(index, 1);
        }
    }

    // Atualizar a lista do carrinho
    atualizarCarrinho();

    // Calcular e exibir o total do carrinho
    calcularTotalCarrinho();

    // Atualizar o armazenamento local
    localStorage.setItem("carrinho", JSON.stringify(carrinho));

    // Atualizar o valor total do carrinho na página
    atualizarTotalCarrinho();
}

// Função para aumentar a quantidade de um item no carrinho
function aumentarQuantidade(nomeProduto) {
    const produtoExistente = carrinho.find((item) => item.nome === nomeProduto);

    if (produtoExistente) {
        produtoExistente.quantidade++;
    }

    // Atualizar a lista do carrinho
    atualizarCarrinho();

    // Calcular e exibir o total do carrinho
    calcularTotalCarrinho();

    // Atualizar o armazenamento local
    localStorage.setItem("carrinho", JSON.stringify(carrinho));

    // Atualizar o valor total do carrinho na página
    atualizarTotalCarrinho();
}

// Verificar se há itens de carrinho armazenados no localStorage
const carrinhoSalvo = localStorage.getItem("carrinho");
if (carrinhoSalvo) {
    carrinho = JSON.parse(carrinhoSalvo);
}

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

// Função para atualizar o carrinho na barra lateral
function atualizarCarrinho() {
    const carrinhoLista = document.getElementById("itens-carrinho");

    if (!carrinhoLista) {
        console.error("Elemento 'itens-carrinho' não encontrado.");
        return;
    }

    carrinhoLista.innerHTML = ""; // Limpa a lista antes de atualizar

    carrinho.forEach((item) => {
        const itemHTML = `
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <div>
                    ${item.nome} - R$ ${item.preco.toFixed(2)} x ${
                        item.quantidade
                    }
                </div>
                <div class="input-group input-group-sm" style="width: 120px;">
                    <button class="btn btn-secondary" onclick="diminuirQuantidade('${
                        item.nome
                    }')">-</button>
                    <span class="input-group-text">${item.quantidade}</span>
                    <button class="btn btn-secondary" onclick="aumentarQuantidade('${
                        item.nome
                    }')">+</button>
                </div>
            </li>
        `;
        carrinhoLista.insertAdjacentHTML("beforeend", itemHTML);
    });
}

// Função para calcular o total do carrinho
function calcularTotalCarrinho() {
    let total = 0;
    carrinho.forEach((item) => {
        total += item.preco * item.quantidade;
    });
    return total.toFixed(2);
}

// Função para atualizar o valor total do carrinho na página
function atualizarTotalCarrinho() {
    const totalCarrinhoElement = document.getElementById("total-carrinho");
    const totalCarrinho = calcularTotalCarrinho(); // Calcular o total do carrinho
    totalCarrinhoElement.textContent = `Total: R$ ${totalCarrinho}`;
}

// Função para revisar o pedido
function revisarPedido() {
    // Armazenar o carrinho no localStorage
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    // Redirecionar para a página de carrinho de compras
    window.location.href = "carrinho-de-compras.html";
}

// Adicionar um ouvinte de evento ao botão "Revisar Pedido"
const revisarPedidoBtn = document.getElementById("revisar-pedido");
if (revisarPedidoBtn) {
    revisarPedidoBtn.addEventListener("click", revisarPedido);
}
atualizarCarrinho();
calcularTotalCarrinho();
