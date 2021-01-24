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


const { getParents, getOneParent, addParent, editParent, deleteParent } = require('../controllers/parent.controller');

apptset.get('/parent/', getParents);
apptset.get('/parent/:idparent', getOneParent);
apptset.post('/parent/', addParent);
apptset.put('/parent/:idparent', editParent);
apptset.put('/parent/delete/:idparent', deleteParent);

module.exports = apptset