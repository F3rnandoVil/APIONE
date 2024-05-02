let router = require('express').Router();
let numeros=[1,2,3,4,5,6,7,8,9,10]


router.get('/', (req, res) => {
    res.json({numeros: numeros})
  })


router.put('/:id', (req, res) => {
    console.log(req.params.id);
    indice=numeros.indexOf(parseInt(req.params.id));
    numeros[indice]=parseInt(req.body.numero);
    res.json({tipo:'update',numero:indice})
    }) 
router.get('/:id', (req, res) => {
    console.log(req.params.id);
    indice=numeros.indexOf(parseInt(req.params.id));
    res.json({tipo:'busqueda',numero:indice})
    })

router.delete('/:id', (req, res) => {
    console.log(req.params.id);
    indice=numeros.indexOf(parseInt(req.params.id));
    numeros.splice(indice,1);
    res.json({tipo:'delete',numero:indice})
    })
router.post('/', (req, res) => {
    let numero = parseInt(req.body.numero);
    let indice=numeros.indexOf(numero);
    if(indice==-1)
        numeros.push(numero);
    res.json({tipo:'add',numero:numero})
    })
    
module.exports = router;