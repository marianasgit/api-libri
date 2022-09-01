const express = require('express');

// CONFIGURAR UM RECURSO DE ROTEAMENTOS (Router)
const router = express.Router();

const livroModel = require('../model/LivroModel')

// ROTA DE LISTAGEM DE LIVROS
router.get('/listarLivros', (req,res) => {
    res.send('ROTA DE LISTAGEM DE LIVROS')
});

//ROTA DE CADASTRO DE LIVROS
router.post('/cadastrarLivros', (req,res) => {
    console.log(req.body);
    res.send('ROTA DE CADASTRO DE LIVROS')
});

//ROTA DE ALTERAÇÃO DE LIVROS
router.put('/alterarLivros', (req,res) => {
    res.send('ROTA DE ALTERAÇÃO DE LIVROS')
});

//ROTA DE EXCLUSÃO DE LIVROS 
router.delete('/excluirLivros', (req,res) => {
    res.send('ROTA DE EXCLUSÃO DE LIVROS')
});

module.exports = router;