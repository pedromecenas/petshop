const Atendimentos = require('../models/atendimentos')
const conexao = require('../database/conexao');

module.exports = app => {

    app.get('/atendimentos',(req, res) => {
        let query = 'SELECT * FROM atendimentos';

        conexao.query(query, (err, rows) => {
            if(err) throw err;

            res.send(rows);
        })

    });

    app.post('/atendimentos',(req, res) => {
        const atendimento = req.body;
        Atendimentos.adiciona(atendimento, res)
        });
}