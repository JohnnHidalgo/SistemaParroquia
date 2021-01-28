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


const { getGodParents, getOneGodParent, getLastId, addGodParent, editGodParent, deleteGodParent } = require('../controllers/godparent.controller');

apptset.get('/godparent/', getGodParents);
apptset.get('/godparent/:idgodparent', getOneGodParent);
apptset.get('/godparent/last/id', getLastId);
apptset.post('/godparent/', addGodParent);
apptset.put('/godparent/:idgodparent', editGodParent);
apptset.put('/godparent/delete/:idgodparent', deleteGodParent);

module.exports = apptset