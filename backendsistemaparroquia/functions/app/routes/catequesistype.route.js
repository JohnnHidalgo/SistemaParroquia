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


const { getCatequesistypes, getOneCatequesistype, getOneCatequesistypeByType, addCatequesistype, editCatequesistype, deleteCatequesistype } = require('../controllers/catequesistype.controller')
apptset.get('/catequesistype/', getCatequesistypes);
apptset.get('/catequesistype/:idcatequesistype', getOneCatequesistype);
apptset.get('/catequesistype/type/:catequesistype', getOneCatequesistypeByType);
apptset.post('/catequesistype/', addCatequesistype);
apptset.put('/catequesistype/:idcatequesistype', editCatequesistype);
apptset.put('/catequesistype/delete/:idcatequesistype', deleteCatequesistype);

module.exports = apptset