const express = require('express')

const app = express();

// IMPORTACAO DO ARQUIVO DE ROTAS LIVRO
const livrosController = require('./controller/LivroController');

app.use(express.json());

app.use('/', livrosController)

app.listen(3000, () => {
    console.log('Aplicação executada com sucesso em - http://localhost:3000')
});
