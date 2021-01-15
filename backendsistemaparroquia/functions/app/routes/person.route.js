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

const { getPersons, getOnePerson, addPerson, editPerson, deletePerson } = require('../controllers/person.controller')
apptset.get('/', getPersons);
apptset.get('/person/', getPersons);
apptset.get('/person/:idperson', getOnePerson);
apptset.post('/person/', addPerson);
apptset.put('/person/:idperson', editPerson);
apptset.put('/person/delete/:idperson', deletePerson);

module.exports = apptset