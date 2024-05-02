let mysql=require('../bd/mysql.js');

module.exports = {
    listar: (req, res) => {
        mysql.query('SELECT * FROM clientes', (err, rows, fields) => {
            if(err){
            res.json(err);
            }
            else{
            res.json({rows});
            }
        });
    },
    buscar: (req, res) => {
        mysql.query('SELECT * FROM clientes WHERE id = ?', [req.params.id], (err, rows, fields) => {
            if(err){
            res.json(err);
            }
            else{
            res.json({rows});
            }
        });
    },
    eliminar: (req, res) => {
        mysql.query('DELETE FROM clientes WHERE id = ?', [req.params.id], (err, rows, fields) => {
            if(err){
            res.json(err);
            }
            else{
            res.json({rows});
            }
        });
    },
    insertar: (req, res) => {
        mysql.query('INSERT INTO clientes SET ?', [req.body], (err, rows, fields) => {
            if(err){
            res.json(err);
            }
            else{
            res.json({rows});
            }
        });
    },
};