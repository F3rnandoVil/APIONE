let router = require('express').Router();

let clientesr=require('./clientes.js')
//let productosr=require('./productos.js')
router.use('/clientes',clientesr)
//router.use('/productos',productosr)


module.exports = router;