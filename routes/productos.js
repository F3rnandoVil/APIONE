let router = require('express').Router();

router.get('/productos', (req, res) => {
    res.json({productos: productos})
    })
router.get('/productos/:id', (req, res) => {
    console.log(req.params.id);
    indice=productos.findIndex(producto => producto.id == parseInt(req.params.id));
    res.json({tipo:'busqueda',producto:productos[indice]})
    })
router.delete('/productos/:id', (req, res) => {   
    console.log(req.params.id);
    indice=productos.findIndex(producto => producto.id == parseInt(req.params.id));
    productos.splice(indice,1);
    res.json({tipo:'delete',producto:productos[indice]})
    })
router.post('/productos/', (req, res) => { 
    let producto = req.body.producto;
    let indice=productos.indexOf(producto);
    if(indice==-1)
        productos.push(producto);
    res.json({tipo:'add',producto:producto})
    })

    module.exports = router;