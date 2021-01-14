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

const { getDocuments, getOneDocument, addDocument, editDocument, deleteDocument } = require('../controllers/document.controller')
apptset.get('/', getDocuments);
apptset.get('/document/', getDocuments);
apptset.get('/document/:iddocument', getOneDocument);
apptset.post('/document/', addDocument);
apptset.put('/document/:iddocument', editDocument);
apptset.put('/document/delete/:iddocument', deleteDocument);

module.exports = apptset