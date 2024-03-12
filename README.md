# LojaOnline


### <!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AJRNutrition</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <style>
        /* Estilos personalizados */
        /* Estilizando o cabeçalho */
        header {
            background-color: #2C3E50;
            color: white;
        }
        header h1 {
            font-size: 2.5rem;
            font-weight: bold;
            margin-bottom: 0.5rem;
        }
        header p {
            font-size: 1.2rem;
        }
        /* Estilizando a barra de navegação */
        nav {
            background-color: #34495E;
        }
        nav ul {
            display: flex;
            justify-content: center;
            list-style: none;
            padding: 0;
            margin: 0;
        }
        nav ul li {
            margin-right: 1.5rem;
        }
        nav ul li a {
            color: white;
            text-decoration: none;
            font-size: 1.2rem;
            transition: color 0.3s ease;
        }
        nav ul li a:hover {
            color: #F39C12;
        }
        /* Estilizando os produtos */
        #produtos {
            padding: 2rem 0;
        }
        .produto {
            background-color: #ECF0F1;
            border-radius: 10px;
            padding: 1.5rem;
            text-align: center;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .produto img {
            border-radius: 50%;
            width: 150px;
            height: 150px;
            object-fit: cover;
            margin-bottom: 1rem;
        }
        .produto h2 {
            font-size: 1.5rem;
            margin-bottom: 0.5rem;
        }
        .produto p {
            color: #7F8C8D;
            margin-bottom: 1rem;
        }
        .produto button {
            background-color: #3498DB;
            color: white;
            padding: 0.5rem 1rem;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }
        .produto button:hover {
            background-color: #2980B9;
        }
        /* Estilizando o carrinho */
        #carrinho {
            background-color: #ECF0F1;
            border-radius: 10px;
            padding: 1.5rem;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        #carrinho h2 {
            font-size: 1.8rem;
            margin-bottom: 1rem;
        }
        #carrinho-container {
            max-height: 300px;
            overflow-y: auto;
            padding-right: 1rem; /* Adiciona espaço para a barra de rolagem não cobrir os itens */
        }
        #total-compra {
            font-size: 1.2rem;
            font-weight: bold;
            margin-top: 1rem;
        }
        /* Estilizando o rodapé */
        footer {
            background-color: #2C3E50;
            color: white;
            text-align: center;
            padding: 1rem 0;
            margin-top: 2rem;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
        }
    </style>
</head>
<body>
    <!-- Cabeçalho -->
    <header>
        <div class="container mx-auto px-4 py-6">
            <h1 class="text-3xl">AJRNutrition</h1>
            <p>Bem-vindo à RawNutrition!</p>
        </div>
    </header>

    <!-- Barra de navegação -->
    <nav>
        <div class="container mx-auto px-4 py-3">
            <ul class="flex justify-center space-x-4">
                <li><a href="index.html" class="hover:text-yellow-300">Página Inicial</a></li>
                <li><a href="produtos.html" class="hover:text-yellow-300">Produtos</a></li>
                <li><a href="carrinho.html" class="hover:text-yellow-300">Carrinho</a></li>
                <!-- Adicione mais links conforme necessário -->
            </ul>
        </div>
    </nav>


     <!-- Carrinho -->
        <aside id="carrinho" class="container mx-auto px-4 py-6 mt-8">
            <h2 class="text-2xl font-bold mb-4">Carrinho de Compras</h2>
            <div id="carrinho-container" class="overflow-auto"></div>
            <p id="total-compra" class="mt-4 text-lg font-semibold">Total: R$ 0.00</p>
            <button id="limpar-carrinho" class="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded mt-4">Limpar Carrinho</button>
            <button id="finalizar-compra" class="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded mt-2">Finalizar Compra</button>
        </aside>

        <!-- Rodapé -->
        <footer>
            <div class="container mx-auto px-4">
                <p>&copy; 2024 Loja de Suplementos. Todos os direitos reservados.</p>
            </div>
        </footer>

         <!-- Script JavaScript para adicionar os produtos -->
        <script>
            const produtos = [
                { id: 1, nome: "Whey Protein", preco: 99.99 },
                { id: 2, nome: "Creatina", preco: 29.99 },
                { id: 3, nome: "Glutamina", preco: 39.99 },
                { id: 4, nome: "Multivitamínico", preco: 49.99 },
                { id: 5, nome: "Pré-Workout", preco: 79.99 },
                { id: 6, nome: "Barras de Proteína", preco: 29.99 },
                { id: 7, nome: "Beta Alanina", preco: 44.99 },
            ];

            const produtosContainer = document.getElementById("produtos");
            const carrinhoContainer = document.getElementById("carrinho-container");
            const totalCompraElement = document.getElementById("total-compra");
            const limparCarrinhoButton = document.getElementById("limpar-carrinho");
            const finalizarCompraButton = document.getElementById("finalizar-compra");

            // Adiciona os produtos à seção de produtos
            produtos.forEach(produto => {
                const produtoHTML = `
                    <div class="produto">
                        <img src="https://via.placeholder.com/300x300" alt="${produto.nome}" class="w-48 h-48 rounded-full mb-4 hover:opacity-80 transition duration-300">
                        <h2 class="text-xl font-bold mb-2">${produto.nome}</h2>
                        <p class="text-lg font-bold text-gray-800">R$ ${produto.preco.toFixed(2)}</p>
                        <button onclick="adicionarAoCarrinho(${produto.id})" class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mt-2">Adicionar ao Carrinho</button>
                    </div>
                `;
                produtosContainer.insertAdjacentHTML("beforeend", produtoHTML);
            });

            // Array para armazenar os produtos no carrinho
            let carrinho = [];

            // Função para adicionar um produto ao carrinho
            function adicionarAoCarrinho(idProduto) {
                // Encontra o produto pelo ID
                const produto = produtos.find(item => item.id === idProduto);

                // Verifica se o produto já está no carrinho
                const produtoNoCarrinho = carrinho.find(item => item.id === idProduto);

                if (produtoNoCarrinho) {
                    // Se o produto já estiver no carrinho, incrementa a quantidade
                    produtoNoCarrinho.quantidade++;
                } else {
                    // Caso contrário, adiciona o produto ao carrinho
                    carrinho.push({...produto, quantidade: 1});
                }

                // Atualiza o conteúdo do carrinho na página
                atualizarCarrinho();
            }

            // Função para remover um item do carrinho
            function removerDoCarrinho(idProduto) {
                // Encontra o produto pelo ID no carrinho
                const index = carrinho.findIndex(item => item.id === idProduto);

                if (index !== -1) {
                    // Remove o produto do carrinho
                    carrinho.splice(index, 1);
                }

                // Atualiza o conteúdo do carrinho na página
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
                carrinhoContainer.innerHTML = "";
                let totalCompra = 0;

                carrinho.forEach(item => {
                    const itemHTML = `
                        <div class="item-carrinho">
                            <div>${item.nome} - R$ ${item.preco.toFixed(2)} - Quantidade: ${item.quantidade}</div>
                            <button onclick="removerDoCarrinho(${item.id})">Remover</button>
                        </div>
                    `;
                    carrinhoContainer.insertAdjacentHTML("beforeend", itemHTML);
                    totalCompra += item.preco * item.quantidade;
                });

                totalCompraElement.textContent = `Total: R$ ${totalCompra.toFixed(2)}`;
            }

            // Adiciona os event listeners para os botões
            limparCarrinhoButton.addEventListener("click", limparCarrinho);
            finalizarCompraButton.addEventListener("click", finalizarCompra);
        </script>
    </body>
    </html><!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AJRNutrition</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <style>
        /* Estilos personalizados */
        /* Estilizando o cabeçalho */
        header {
            background-color: #2C3E50;
            color: white;
        }
        header h1 {
            font-size: 2.5rem;
            font-weight: bold;
            margin-bottom: 0.5rem;
        }
        header p {
            font-size: 1.2rem;
        }
        /* Estilizando a barra de navegação */
        nav {
            background-color: #34495E;
        }
        nav ul {
            display: flex;
            justify-content: center;
            list-style: none;
            padding: 0;
            margin: 0;
        }
        nav ul li {
            margin-right: 1.5rem;
        }
        nav ul li a {
            color: white;
            text-decoration: none;
            font-size: 1.2rem;
            transition: color 0.3s ease;
        }
        nav ul li a:hover {
            color: #F39C12;
        }
        /* Estilizando os produtos */
        #produtos {
            padding: 2rem 0;
        }
        .produto {
            background-color: #ECF0F1;
            border-radius: 10px;
            padding: 1.5rem;
            text-align: center;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .produto img {
            border-radius: 50%;
            width: 150px;
            height: 150px;
            object-fit: cover;
            margin-bottom: 1rem;
        }
        .produto h2 {
            font-size: 1.5rem;
            margin-bottom: 0.5rem;
        }
        .produto p {
            color: #7F8C8D;
            margin-bottom: 1rem;
        }
        .produto button {
            background-color: #3498DB;
            color: white;
            padding: 0.5rem 1rem;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }
        .produto button:hover {
            background-color: #2980B9;
        }
        /* Estilizando o carrinho */
        #carrinho {
            background-color: #ECF0F1;
            border-radius: 10px;
            padding: 1.5rem;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        #carrinho h2 {
            font-size: 1.8rem;
            margin-bottom: 1rem;
        }
        #carrinho-container {
            max-height: 300px;
            overflow-y: auto;
            padding-right: 1rem; /* Adiciona espaço para a barra de rolagem não cobrir os itens */
        }
        #total-compra {
            font-size: 1.2rem;
            font-weight: bold;
            margin-top: 1rem;
        }
        /* Estilizando o rodapé */
        footer {
            background-color: #2C3E50;
            color: white;
            text-align: center;
            padding: 1rem 0;
            margin-top: 2rem;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
        }
    </style>
</head>
<body>
    <!-- Cabeçalho -->
    <header>
        <div class="container mx-auto px-4 py-6">
            <h1 class="text-3xl">AJRNutrition</h1>
            <p>Bem-vindo à RawNutrition!</p>
        </div>
    </header>

    <!-- Barra de navegação -->
    <nav>
        <div class="container mx-auto px-4 py-3">
            <ul class="flex justify-center space-x-4">
                <li><a href="#" class="hover:text-yellow-300">Página Inicial</a></li>
                <li><a href="produtos.html" class="hover:text-yellow-300">Produtos</a></li> <!-- Link para a página de produtos -->
                <li><a href="#" class="hover:text-yellow-300">Carrinho</a></li>
                <!-- Adicione mais links conforme necessário -->
            </ul>
        </div>
    </nav>

    
        
     <!-- Carrinho -->
        <aside id="carrinho" class="container mx-auto px-4 py-6 mt-8">
            <h2 class="text-2xl font-bold mb-4">Carrinho de Compras</h2>
            <div id="carrinho-container" class="overflow-auto"></div>
            <p id="total-compra" class="mt-4 text-lg font-semibold">Total: R$ 0.00</p>
            <button id="limpar-carrinho" class="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded mt-4">Limpar Carrinho</button>
            <button id="finalizar-compra" class="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded mt-2">Finalizar Compra</button>
        </aside>

        <!-- Rodapé -->
        <footer>
            <div class="container mx-auto px-4">
                <p>&copy; 2024 Loja de Suplementos. Todos os direitos reservados.</p>
            </div>
        </footer>

         <!-- Script JavaScript para adicionar os produtos -->
        <script>
            const produtos = [
                { id: 1, nome: "Whey Protein", preco: 99.99 },
                { id: 2, nome: "Creatina", preco: 29.99 },
                { id: 3, nome: "Glutamina", preco: 39.99 },
                { id: 4, nome: "Multivitamínico", preco: 49.99 },
                { id: 5, nome: "Pré-Workout", preco: 79.99 },
                { id: 6, nome: "Barras de Proteína", preco: 29.99 },
                { id: 7, nome: "Beta Alanina", preco: 44.99 },
            ];

            const produtosContainer = document.getElementById("produtos");
            const carrinhoContainer = document.getElementById("carrinho-container");
            const totalCompraElement = document.getElementById("total-compra");
            const limparCarrinhoButton = document.getElementById("limpar-carrinho");
            const finalizarCompraButton = document.getElementById("finalizar-compra");

            // Adiciona os produtos à seção de produtos
            produtos.forEach(produto => {
                const produtoHTML = `
                    <div class="produto">
                        <img src="https://via.placeholder.com/300x300" alt="${produto.nome}" class="w-48 h-48 rounded-full mb-4 hover:opacity-80 transition duration-300">
                        <h2 class="text-xl font-bold mb-2">${produto.nome}</h2>
                        <p class="text-lg font-bold text-gray-800">R$ ${produto.preco.toFixed(2)}</p>
                        <button onclick="adicionarAoCarrinho(${produto.id})" class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mt-2">Adicionar ao Carrinho</button>
                    </div>
                `;
                produtosContainer.insertAdjacentHTML("beforeend", produtoHTML);
            });

            // Array para armazenar os produtos no carrinho
            let carrinho = [];

            // Função para adicionar um produto ao carrinho
            function adicionarAoCarrinho(idProduto) {
                // Encontra o produto pelo ID
                const produto = produtos.find(item => item.id === idProduto);

                // Verifica se o produto já está no carrinho
                const produtoNoCarrinho = carrinho.find(item => item.id === idProduto);

                if (produtoNoCarrinho) {
                    // Se o produto já estiver no carrinho, incrementa a quantidade
                    produtoNoCarrinho.quantidade++;
                } else {
                    // Caso contrário, adiciona o produto ao carrinho
                    carrinho.push({...produto, quantidade: 1});
                }

                // Atualiza o conteúdo do carrinho na página
                atualizarCarrinho();
            }

            // Função para remover um item do carrinho
            function removerDoCarrinho(idProduto) {
                // Encontra o produto pelo ID no carrinho
                const index = carrinho.findIndex(item => item.id === idProduto);

                if (index !== -1) {
                    // Remove o produto do carrinho
                    carrinho.splice(index, 1);
                }

                // Atualiza o conteúdo do carrinho na página
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
                carrinhoContainer.innerHTML = "";
                let totalCompra = 0;

                carrinho.forEach(item => {
                    const itemHTML = `
                        <div class="item-carrinho">
                            <div>${item.nome} - R$ ${item.preco.toFixed(2)} - Quantidade: ${item.quantidade}</div>
                            <button onclick="removerDoCarrinho(${item.id})">Remover</button>
                        </div>
                    `;
                    carrinhoContainer.insertAdjacentHTML("beforeend", itemHTML);
                    totalCompra += item.preco * item.quantidade;
                });

                totalCompraElement.textContent = `Total: R$ ${totalCompra.toFixed(2)}`;
            }

            // Adiciona os event listeners para os botões
            limparCarrinhoButton.addEventListener("click", limparCarrinho);
            finalizarCompraButton.addEventListener("click", finalizarCompra);
        </script>
    </body>
    </html>