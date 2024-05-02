let clienteController=require('../controllers/clienteController.js');
let router = require('express').Router();
router.get('/', (req,res)=>{
    clienteController.listar(req,res);
})
router.get('/:id', (req,res)=>{
    clienteController.buscar(req,res);
})
router.delete('/:id', (req,res)=>{
    clienteController.eliminar(req,res);
})
router.post('/', (req,res)=>{
    clienteController.insertar(req,res);
})
module.exports = router;