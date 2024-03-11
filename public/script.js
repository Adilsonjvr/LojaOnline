// Função para obter todos os produtos do backend
async function obterProdutos() {
    try {
        const response = await fetch('/api/produtos');
        if (!response.ok) {
            throw new Error('Não foi possível obter os produtos');
        }
        const produtos = await response.json();
        renderizarProdutos(produtos); // Chamar renderizarProdutos() após obter os produtos
        return produtos;
    } catch (error) {
        console.error('Erro ao obter os produtos:', error);
        return [];
    }
}

// Função para renderizar os produtos na seção de produtos
async function renderizarProdutos() {
    try {
        const produtosContainer = document.getElementById('produtos');
        const produtos = await obterProdutos();

        // Limpar o conteúdo atual da seção de produtos
        produtosContainer.innerHTML = '';

        produtos.forEach(produto => {
            const produtoHTML = `
                <div class="produto">
                    <img src="imagem/${produto.nome.toLowerCase().replace(/\s/g, '-')}.jpg" alt="${produto.nome}">
                    <h3>${produto.nome}</h3>
                    <p>Preço: R$ ${produto.preco.toFixed(2)}</p>
                    <button class="adicionar" data-id="${produto.id}">Adicionar ao Carrinho</button>
                </div>
            `;
            produtosContainer.innerHTML += produtoHTML;
        });

        // Adicionar um ouvinte de eventos a todos os botões "Adicionar ao Carrinho"
        const botoesAdicionar = document.querySelectorAll('.produto .adicionar');
        botoesAdicionar.forEach(botao => {
            botao.addEventListener('click', adicionarAoCarrinho);
        });
    } catch (error) {
        console.error('Erro ao renderizar produtos:', error);
    }
}


// Chamar a função renderizarProdutos para exibir os produtos na página
renderizarProdutos();

// Função para adicionar produtos ao carrinho
async function adicionarAoCarrinho(event) {
    event.preventDefault();
    const produtoId = event.target.dataset.id;

    try {
        const response = await fetch(`/api/produtos/${produtoId}`);
        if (!response.ok) {
            throw new Error('Produto não encontrado');
        }
        const produto = await response.json();

        // Aqui você pode fazer uma requisição POST para adicionar o produto ao carrinho no backend
        console.log('Produto adicionado ao carrinho:', produto);
    } catch (error) {
        console.error('Erro ao adicionar produto ao carrinho:', error);
    }
}
