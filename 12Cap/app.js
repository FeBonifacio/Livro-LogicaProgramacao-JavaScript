const { request } = require('express');
const express = require('express');

const app = express();
const port = 3001;

const livros = require('./livros');

app.use('/livros', livros); // identificaçao da rota e da CONT REQUIRE ASSOCIADA

app.get('/', (req, res) => {
    res.send('Olá... Sejam Bem-vindos!');
});

app.get('/cap12', (req, res) => {
    res.send('<h2>Cap 12: Introdução ao Express</h2>');
});

app.use(express.json());
app.post('/filmes', (req, res) => {
    const { titulo, genero } = req.body
    res.send(`Filme: ${titulo} - Gênero: ${genero}, recebido...`);
});

//  Middleware
const log = (req, res, next) => {
    console.log(`.................. Acessando em ${new Date()}`);
    next();
}

app.get('/transfere', log, (req, res) => {
    res.send("Ok! Valor transferido com sucesso...");
})

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

app.use('/livros', livros); // identificaçao da rota e da CONT REQUIRE ASSOCIADA
app.post('/', livros);
app.use("/:id", livros);

