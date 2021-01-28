'use strict'

const test = require('express');
var apptset = test();
var cors = require('cors')

apptset.use(cors({ origin: 'https://sistemaparroquia-48abe.web.app' }));
apptset.use(cors({ origin: 'http://localhost:4200' }));
apptset.use(cors());

apptset.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const { getProducts, getOneProduct, addProduct, editProduct, deleteProduct } = require('../controllers/producto.controller')
apptset.get('/product/', getProducts);
apptset.get('/product/:idproducto', getOneProduct);
apptset.post('/product/', addProduct);
apptset.put('/product/:idproducto', editProduct);
apptset.put('/product/delete/:idproducto', deleteProduct);

module.exports = apptset