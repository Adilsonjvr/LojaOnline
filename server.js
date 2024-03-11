const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Array de produtos
let produtos = [
    { id: 1, nome: "Whey Protein", preco: 99.99 },
    { id: 2, nome: "Creatina", preco: 29.99 },
    { id: 3, nome: "Glutamina", preco: 39.99 },
    { id: 4, nome: "Multivitamínico", preco: 49.99 },
    { id: 5, nome: "Pré-Workout", preco: 79.99 },
    { id: 6, nome: "Barras de Proteína", preco: 29.99 },
    { id: 7, nome: "Beta Alanina", preco: 44.99 },

];

app.use(express.json());

// Servir arquivos estáticos da pasta public
app.use(express.static(path.join(__dirname, 'public')));

// Rota para obter todos os produtos
app.get('/api/produtos', (req, res) => {
    res.json(produtos);
});

// Rota para obter um produto específico pelo ID
app.get('/api/produtos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const produto = produtos.find(p => p.id === id);
    if (!produto) return res.status(404).json({ message: "Produto não encontrado" });
    res.json(produto);
});

// Rota para adicionar um novo produto
app.post('/api/produtos', (req, res) => {
    const produto = req.body;
    produto.id = produtos.length + 1;
    produtos.push(produto);
    res.status(201).json(produto);
});

// Rota para atualizar um produto existente
app.put('/api/produtos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = produtos.findIndex(p => p.id === id);
    if (index === -1) return res.status(404).json({ message: "Produto não encontrado" });
    produtos[index] = req.body;
    res.json(produtos[index]);
});

// Rota para excluir um produto
app.delete('/api/produtos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    produtos = produtos.filter(p => p.id !== id);
    res.json({ message: "Produto excluído com sucesso" });
});

// Rota para servir a página HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Servidor está rodando em http://localhost:${PORT}`);
});
