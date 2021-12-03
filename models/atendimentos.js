const conexao = require('../database/conexao');


class Atendimentos {
    adiciona(atendimento, res) {

        const sql = 'INSERT INTO Atendimentos SET ?'

        conexao.query(sql, atendimento, (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(201).json(resultados)
            }
        })
    }

}


module.exports = new Atendimentos
