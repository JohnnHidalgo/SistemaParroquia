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

const { getPersonDocuments, getOnePersonDocument, addPersonDocument, editPersonDocument, deletePersonDocument } = require('../controllers/persondocument.controller')
apptset.get('/persondocument/person/:idperson', getPersonDocuments);
apptset.get('/persondocument/:idpersondocument', getOnePersonDocument);
apptset.post('/persondocument/', addPersonDocument);
apptset.put('/persondocument/:idpersondocument', editPersonDocument);
apptset.put('/persondocument/delete/:idpersondocument', deletePersonDocument);

module.exports = apptset