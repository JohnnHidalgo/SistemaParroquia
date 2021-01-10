'use strict'

const test = require('express');
var apptset = test();

const { getDocuments, getOneDocument, addDocument, editDocument, deleteDocument } = require('../controllers/document.controller')
apptset.get('/', getDocuments);
apptset.get('/document/', getDocuments);
apptset.get('/document/:iddocument', getOneDocument);
apptset.post('/document/', addDocument);
apptset.put('/document/:iddocument', editDocument);
apptset.put('/document/delete/:iddocument', deleteDocument);

module.exports = apptset