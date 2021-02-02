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

const { getGodParentPersons, getOneGodParentPerson, getGodParentsByPerson, addGodParentPerson, deleteGodParentPerson } = require('../controllers/godparentperson.controller')
apptset.get('/godparentperson/', getGodParentPersons);
apptset.get('/godparentperson/:iddogparenperson', getOneGodParentPerson);
apptset.get('/godparentperson/godperson/:idperson', getGodParentsByPerson);
apptset.post('/godparentperson/', addGodParentPerson);
apptset.put('/godparentperson/delete/:iddogparenperson', deleteGodParentPerson);

module.exports = apptset