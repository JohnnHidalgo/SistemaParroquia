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

const { getParentPersons, getOneParentPerson, getParentsByPerson, addParentPerson, deleteParentPerson } = require('../controllers/parentperson.controller')
apptset.get('/parentperson/', getParentPersons);
apptset.get('/parentperson/:idparentperson', getOneParentPerson);
apptset.get('/parentperson/person/:idperson', getParentsByPerson);
apptset.post('/parentperson/', addParentPerson);
apptset.put('/parentperson/delete/:idparentperson', deleteParentPerson);

module.exports = apptset