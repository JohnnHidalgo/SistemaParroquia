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

const { getMaterials, getOneMaterial, addMaterial, editMaterial, deleteMaterial } = require('../controllers/material.controller')

apptset.get('/material/', getMaterials);
apptset.get('/material/:idmaterial', getOneMaterial);
apptset.post('/material/', addMaterial);
apptset.put('/material/:idmaterial', editMaterial);
apptset.put('/material/delete/:idmaterial', deleteMaterial);

module.exports = apptset