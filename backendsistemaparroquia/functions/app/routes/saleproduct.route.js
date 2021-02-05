'use strict'

const test = require('express');
var apptset = test();
var cors = require('cors')

apptset.use(cors({ origin: '*' }));
apptset.use(cors());

apptset.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const { getSaleProduts, getOneSaleProdut, getProductSaleBySale, addProductSale } = require('../controllers/saleproduct.controller')
apptset.get('/productsale/', getSaleProduts);
apptset.get('/productsale/:idproductsale', getOneSaleProdut);
apptset.get('/productsale/sale/:idsale', getProductSaleBySale);
apptset.post('/productsale/', addProductSale);

module.exports = apptset