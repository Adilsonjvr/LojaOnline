<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Produtos - AJRNutrition</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <style>
        /* Estilos personalizados */
        /* Estilizando o cabeçalho */
        header {
            background-color: #2C3E50;
            color: white;
            text-align: center;
            padding: 2rem 0;
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
            padding: 1rem 0;
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
            padding: 2rem;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
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
        /* Estilizando o rodapé */
        footer {
            background-color: #2C3E50;
            color: white;
            text-align: center;
            padding: 1rem 0;
            margin-top: 2rem;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            clear: both; /* Limpa o rodapé para garantir que ele fique no final da página */
        }
        /* Estilizando a barra lateral do carrinho */
        #barra-lateral {
            position: fixed;
            top: 0;
            right: -300px; /* Inicia fora da tela */
            background-color: #ECF0F1;
            width: 300px;
            height: 100%;
            overflow-y: auto;
            padding: 1rem;
            transition: right 0.3s ease; /* Adiciona uma transição suave */
        }
        #barra-lateral.aberto {
            right: 0; /* Mostra a barra lateral */
        }
        #itens-carrinho {
            margin-bottom: 1rem;
        }
        #itens-carrinho .item {
            margin-bottom: 0.5rem;
        }
        #botao-ir-carrinho {
            background-color: #3498DB;
            color: white;
            padding: 0.5rem 1rem;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s ease;
            margin-top: 1rem;
        }
        #botao-ir-carrinho:hover {
            background-color: #2980B9;
        }
    </style>
</head>
<body>
    <!-- Cabeçalho -->
    <header>
        <div class="container mx-auto px-4 py-6">
            <h1 class="text-3xl">AJR Nutrition</h1>
            <p>Bem-vindo à  AJR Nutrition!</p>
        </div>
    </header>

    <!-- Barra de navegação -->
    <nav>
        <div class="container mx-auto px-4 py-3">
            <ul class="flex justify-center space-x-4">
                <li><a href="#" class="hover:text-yellow-300">Página Inicial</a></li>
                <li><a href="produtos.html" class="hover:text-yellow-300">Produtos</a></li>
                <li><a href="#" class="hover:text-yellow-300">Carrinho</a></li>
                <!-- Adicione mais links conforme necessário -->
            </ul>
        </div>
    </nav>

    <!-- Seção de Produtos -->
    <section id="produtos" class="container mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Aqui serão inseridos os produtos dinamicamente -->
        <!-- Seção de Produtos -->
        <section id="produtos" class="container mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Produto 1: Whey Protein -->
            <div class="produto bg-white rounded-lg shadow-lg p-4 flex flex-col items-center relative transition duration-300 transform hover:scale-105">
                    <img src="https://via.placeholder.com/300x300" alt="Whey Protein" class="w-48 h-48 rounded-full mb-4">
                    <div class="overlay absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
                        <button class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mt-2 transition duration-300" onclick="adicionarAoCarrinho(1)">Adicionar ao Carrinho</button>
                    </div>
                <h2 class="text-xl font-bold mb-2">Whey Protein</h2>
                <p class="text-gray-600 text-center mb-2">Suplemento para ganho de massa muscular.</p>
                <p class="text-lg font-bold text-gray-800">R$ 99.99</p>
            </div>

            <!-- Produto 2: Creatina -->
                <div class="produto bg-white rounded-lg shadow-lg p-4 flex flex-col items-center relative transition duration-300 transform hover:scale-105">
                    <img src="https://via.placeholder.com/300x300" alt="Creatina" class="w-48 h-48 rounded-full mb-4 hover:opacity-80 transition duration-300">
                    <div class="overlay absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
                        <button class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mt-2 transition duration-300" onclick="adicionarAoCarrinho(2)">Adicionar ao Carrinho</button>
                    </div>
                <h2 class="text-xl font-bold mb-2">Creatina</h2>
                <p class="text-gray-600 text-center mb-2">Suplemento para aumento de força e resistência.</p>
                <p class="text-lg font-bold text-gray-800">R$ 29.99</p>
            </div>

            <!-- Produto 3: Glutamina -->
            <div class="produto bg-white rounded-lg shadow-lg p-4 flex flex-col items-center relative transition duration-300 transform hover:scale-105">
                    <img src="https://via.placeholder.com/300x300" alt="Glutamina" class="w-48 h-48 rounded-full mb-4 hover:opacity-80 transition duration-300">
                    <div class="overlay absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
                        <button class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mt-2 transition duration-300" onclick="adicionarAoCarrinho(3)">Adicionar ao Carrinho</button>
                    </div>
                <h2 class="text-xl font-bold mb-2">Glutamina</h2>
                <p class="text-gray-600 text-center mb-2">Suplemento para recuperação muscular.</p>
                <p class="text-lg font-bold text-gray-800">R$ 39.99</p>
            </div>

            <!-- Produto 4: Multivitamínico -->
            <div class="produto bg-white rounded-lg shadow-lg p-4 flex flex-col items-center relative transition duration-300 transform hover:scale-105">
                    <img src="https://via.placeholder.com/300x300" alt="Multivitamínico" class="w-48 h-48 rounded-full mb-4 hover:opacity-80 transition duration-300">
                    <div class="overlay absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
                        <button class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mt-2 transition duration-300" onclick="adicionarAoCarrinho(4)">Adicionar ao Carrinho</button>
                    </div>
                <h2 class="text-xl font-bold mb-2">Multivitamínico</h2>
                <p class="text-gray-600 text-center mb-2">Suplemento para saúde geral.</p>
                <p class="text-lg font-bold text-gray-800">R$ 49.99</p>
            </div>

            <!-- Produto 5: Pré-Workout -->
            <div class="produto bg-white rounded-lg shadow-lg p-4 flex flex-col items-center relative transition duration-300 transform hover:scale-105">
                    <img src="https://via.placeholder.com/300x300" alt="Pré-Workout" class="w-48 h-48 rounded-full mb-4 hover:opacity-80 transition duration-300">
                    <div class="overlay absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
                        <button class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mt-2 transition duration-300" onclick="adicionarAoCarrinho(5)">Adicionar ao Carrinho</button>
                    </div>
                <h2 class="text-xl font-bold mb-2">Pré-Workout</h2>
                <p class="text-gray-600 text-center mb-2">Suplemento pré-treino para energia.</p>
                <p class="text-lg font-bold text-gray-800">R$ 79.99</p>
            </div>

            <!-- Produto 6: Barras de Proteína -->
            <div class="produto bg-white rounded-lg shadow-lg p-4 flex flex-col items-center relative transition duration-300 transform hover:scale-105">
                    <img src="https://via.placeholder.com/300x300" alt="Barras de Proteína" class="w-48 h-48 rounded-full mb-4 hover:opacity-80 transition duration-300">
                    <div class="overlay absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
                        <button class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mt-2 transition duration-300" onclick="adicionarAoCarrinho(6)">Adicionar ao Carrinho</button>
                    </div>
                <h2 class="text-xl font-bold mb-2">Barras de Proteína</h2>
                <p class="text-gray-600 text-center mb-2">Snack proteico conveniente.</p>
                <p class="text-lg font-bold text-gray-800">R$ 29.99</p>
            </div>

            <!-- Produto 7: Beta Alanina -->
            <div class="produto bg-white rounded-lg shadow-lg p-4 flex flex-col items-center relative transition duration-300     transform hover:scale-105">
                    <img src="https://via.placeholder.com/300x300" alt="Beta Alanina" class="w-48 h-48 rounded-full mb-4 hover:opacity-80 transition duration-300">
                    <div class="overlay absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
                        <button class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mt-2 transition duration-300" onclick="adicionarAoCarrinho(7)">Adicionar ao Carrinho</button>
                    </div>
                <h2 class="text-xl font-bold mb-2">Beta Alanina</h2>
                <p class="text-gray-600 text-center mb-2">Suplemento para aumentar a resistência.</p>
                <p class="text-lg font-bold text-gray-800">R$ 44.99</p>
            </div>
        </section>
    </section>

 <!-- Rodapé -->
    <footer>
        <div class="container mx-auto px-4">
            <p>&copy; 2024 Loja de Suplementos. Todos os direitos reservados.</p>
        </div>
    </footer>


        <!-- Barra Lateral do Carrinho -->
        <div id="barra-lateral">
            <h2>Carrinho de Compras</h2>
            <div id="itens-carrinho"></div>
            <button id="botao-ir-carrinho">Ir para o Carrinho</button>
        </div>

        <script>
            // Função para adicionar um produto ao carrinho
            function adicionarAoCarrinho(idProduto) {
                // Aqui você pode adicionar a lógica para adicionar o produto ao carrinho
                // Por enquanto, vamos apenas mostrar a barra lateral do carrinho
                mostrarBarraLateral();
            }

            // Função para mostrar a barra lateral do carrinho
            function mostrarBarraLateral() {
                const barraLateral = document.getElementById('barra-lateral');
                barraLateral.classList.add('aberto');
            }

            // Função para fechar a barra lateral do carrinho
            function fecharBarraLateral() {
                const barraLateral = document.getElementById('barra-lateral');
                barraLateral.classList.remove('aberto');
            }

            // Event listener para o botão "Ir para o Carrinho"
            document.getElementById('botao-ir-carrinho').addEventListener('click', function() {
                // Aqui você pode adicionar a lógica para redirecionar para a página do carrinho
                // Por enquanto, vamos apenas fechar a barra lateral
                fecharBarraLateral();
            });
        </script>
    </body>
    </html>