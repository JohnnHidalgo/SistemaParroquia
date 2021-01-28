'use strict'

const test = require('express');
var apptset = test();
var cors = require('cors')

apptset.use(cors({ origin: 'https://sistemaparroquia-48abe.web.app/' }));
apptset.use(cors());

apptset.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


const { getCatequistas, getOneCatequista, addCatequista, editCatequista, deleteCatequista } = require('../controllers/catequista.controller')
apptset.get('/catequista/', getCatequistas);
apptset.get('/catequista/:idcatequista', getOneCatequista);
apptset.post('/catequista/', addCatequista);
apptset.put('/catequista/:idcatequista', editCatequista);
apptset.put('/catequista/delete/:idcatequista', deleteCatequista);

module.exports = apptset