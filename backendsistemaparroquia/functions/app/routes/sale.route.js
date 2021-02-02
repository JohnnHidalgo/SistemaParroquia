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

const { getSales, getOneSale, addSale, deleteSale} = require('../controllers/sale.controller')
apptset.get('/sale/', getSales);
apptset.get('/sale/:idsale', getOneSale);
apptset.post('/sale/', addSale);
apptset.put('/sale/delete/:idsale', deleteSale);

module.exports = apptset