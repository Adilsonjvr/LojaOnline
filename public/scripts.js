// JavaScript para mostrar/ocultar a barra lateral do carrinho
const mostrarSidebarBtn = document.getElementById("mostrar-sidebar");
const esconderSidebarBtn = document.getElementById("esconder-sidebar");
const sidebar = document.getElementById("sidebar");

mostrarSidebarBtn.addEventListener("click", () => {
    sidebar.classList.add("open");
});

esconderSidebarBtn.addEventListener("click", () => {
    sidebar.classList.remove("open");
});

// Variável para armazenar os itens do carrinho
const carrinho = [];

// Função para adicionar item ao carrinho
function adicionarAoCarrinho(nomeProduto, precoProduto) {
    const carrinhoLista = document.getElementById("carrinho-lista");

    // Adicionar o item ao carrinho
    carrinho.push({ nome: nomeProduto, preco: precoProduto });

    // Atualizar a lista do carrinho
    atualizarCarrinho();

    // Calcular e exibir o total do carrinho
    calcularTotalCarrinho();
}

// Função para atualizar a lista do carrinho
function atualizarCarrinho() {
    const carrinhoLista = document.getElementById("carrinho-lista");

    // Limpar a lista do carrinho
    carrinhoLista.innerHTML = "";

    // Adicionar os itens do carrinho à lista
    carrinho.forEach((item) => {
        const itemHTML = `
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    ${item.nome} - R$ ${item.preco}
                    <div>
                        <button class="btn btn-sm btn-secondary mx-2">-</button>
                        <span class="badge bg-light text-dark">1</span>
                        <button class="btn btn-sm btn-secondary mx-2">+</button>
                        <button class="btn btn-sm btn-danger">Remover</button>
                    </div>
                </li>
            `;
        carrinhoLista.insertAdjacentHTML("beforeend", itemHTML);
    });
}

// Função para calcular e exibir o total do carrinho
function calcularTotalCarrinho() {
    const totalCarrinho = carrinho.reduce(
        (total, item) => total + item.preco,
        0,
    );
    const totalCarrinhoElement = document.getElementById("total-carrinho");
    totalCarrinhoElement.textContent = `Total: R$ ${totalCarrinho.toFixed(2)}`;
}
