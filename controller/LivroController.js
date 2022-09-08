const express = require('express');

// CONFIGURAR UM RECURSO DE ROTEAMENTOS (Router)
const router = express.Router();

const livroModel = require('../model/LivroModel')

// ROTA DE LISTAGEM DE LIVROS
router.get('/listarLivros', (req,res) => {
    //res.send('ROTA DE LISTAGEM DE LIVROS')

    livroModel.findAll()
    .then(
        (livros) => {
            res.status(200).send(livros);
        }
    )
    .catch(
        (error) => {
            res.status(500).json({"MSG":"NÃO FOI POSSÍVEL LISTAR OS LIVROS"});
        }
    );

});

// ROTA DE LISTAGEM DE LIVROS POR ID
router.get('/listarLivros/:cod_livro', (req,res) => {
    
    //USANDO FINDALL

    let {cod_livro} = req.params; 

    livroModel.findAll({
        where: {cod_livro}
    })
    .then(
        (livro) => {
            res.status(200).send(livro);
        }
           
    )
    .catch(
        (error) => {
            res.status(500).json({"MSG":error});
        }    
    );

    //USANDO FINDBYPK
    // livroModel.findByPk(cod_livro)
    // .then(
    //     (livro) => {
    //         res.status(200).send(livro);
    //     }
    // )
    // .catch(
    //     (error) => {
    //         res.status(500).json({"MSG":error});
    //     }
    // );

});

//ROTA DE CADASTRO DE LIVROS
router.post('/cadastrarLivros', (req,res) => {
    // console.log(req.body);
    // res.send('ROTA DE CADASTRO DE LIVROS')

    let {titulo, descricao, imagem} = req.body;

    livroModel.create({
        titulo,
        descricao,
        imagem 
    }).then(
        () => {
            res.status(201).json({"MSG":"LIVRO INSERIDO COM SUCESSO"});
        }
    ).catch(
        (error) => {
            res.status(500).json({"MSG":"NÃO FOI POSSÍVEL CADASTRAR O LIVRO"});
        }
    );
});

//ROTA DE ALTERAÇÃO DE LIVROS
router.put('/alterarLivros', (req,res) => {
    //res.send('ROTA DE ALTERAÇÃO DE LIVROS')

    let {titulo, descricao, imagem, cod_livro} = req.body;

    livroModel.update(
        {
            titulo,
            descricao,
            imagem
       },
       {where:{cod_livro}}
    )   
    .then(
        () => {
            res.status(200).send({"MSG":"LIVRO ALTERADO COM SUCESSO"});
        }
    )
    .catch(
        (error) => {
            res.status(500).json({"MSG":error});
        }   
    );

});

//ROTA DE EXCLUSÃO DE LIVROS 
router.delete('/excluirLivros/:cod_livro', (req,res) => {
    //res.send('ROTA DE EXCLUSÃO DE LIVROS')

    let {cod_livro} = req.params;

    livroModel.destroy({where:{cod_livro}})
    .then(
        () => {
            res.status(200).send({"MSG":"LIVRO EXCLUÍDO COM SUCESSO"});
        }
    )
    .catch(
        (error) => {
            res.status(500).json({"MSG":error});
        }
    );

});

module.exports = router;    