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

const { getPersonMaterials, getOnePersonMaterial, addPersonMaterial, editPersonMaterial, deletePersonMaterial } = require('../controllers/personmaterial.controller')
apptset.get('/personmaterial/person/:idperson', getPersonMaterials);
apptset.get('/personmaterial/:idpersonmaterial', getOnePersonMaterial);
apptset.post('/personmaterial/', addPersonMaterial);
apptset.put('/personmaterial/:idpersonmaterial', editPersonMaterial);
apptset.put('/personmaterial/delete/:idpersonmaterial', deletePersonMaterial);

module.exports = apptset