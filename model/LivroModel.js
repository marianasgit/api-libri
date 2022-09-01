// IMPORT DO SEQUELIZE
const Sequelize = require('Sequelize');

//IMPORT DA CONEXAO
const conection = require('../database/database');

/**   REPRESENTACAO DO MODELO DE DADOS tbl_livro
 * PARAMETROS:
 * 1 - NOME DA TABELA
 * 2 - OBJETO JSON CONTENDO:    
 *      - NOME DO CAMPO
 *      - TIPO DE DADO
 *      - REGRAS DO CAMPO 
*/

const LivroModel = conection.define(
    'tbl_livro',
    {
        cod_livro: {
            type: Sequelize.INTEGER(10),
            primaryKey: true,
            autoIncrement: true
        },

        titulo: {
            type: Sequelize.STRING(100),
            allowNull: true
        },

        descricao: {
            type:Sequelize.TEXT,
            allowNull: true
        },

        imagem: {
            type: Sequelize.STRING(500),
            allowNull: true
        },
    }
);

//LivroModel.sync({force:true});

module.exports = LivroModel;
