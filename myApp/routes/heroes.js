var express = require('express');
var router = express.Router();
var heroesController = require('../controllers/heroesController')

/* GET home page. */
router.get('/', heroesController.listado);
router.get('/detalle/:id', heroesController.detalle);
router.get('/bio/:id/:ok?', heroesController.detalleConBio);

module.exports = router;
