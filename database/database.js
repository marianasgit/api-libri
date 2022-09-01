const Sequelize = require('sequelize')

/** CRIACAO DE UMA INSTANCIA DO SEQUELIZE E CONEXAO COM O BANCO DE DADOS MYSQL
 * PARAMENTROS DE CONEXAO COM O BANCO DE DADOS
 * 1 - NOME DO BD -> string
 * 2 - USUARIO DO BD -> sring
 * 3 - SENHA DO BD -> string
 * 4 - OBJETO JSON -> DETERMINA AS CONFIGURACOES DE USO DO BD
        4.1 - LOCAL DA INSTANCIA DO BD (LOCALHOST)
        4.2 - TIPO DO BANCO DE DADOS (MYSQL)
        4.3 - DEFINICAO DE FUSO HORARIO DO BD
  */

const conection = new Sequelize(
    'applibri_ds3t',
    'root',
    '12345678',
    {
        host: 'localhost',
        dialect: 'mysql',
        timezone: '-03:00'
    }
);

module.exports = conection;