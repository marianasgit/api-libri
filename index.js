const express = require('express')

const app = express();

//ROTA GET DE TESTE
app.get('/', (req, res) => {
    res.send('RESPOSTA DA ROTA RAIZ');
})

//ROTA GET DE LISTAGEM DE DENTISTAS
app.get('/dentistas', (req, res) => {
    res.send('RESPOSTA DA ROTA DE LISTAGEM');
})

app.listen(3000, () => {
    console.log('Aplicação executada com sucesso em - http://localhost:3000')
});