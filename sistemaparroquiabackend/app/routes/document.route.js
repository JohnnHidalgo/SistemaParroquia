'use strict'

const route = require('express').Router()
const { getDocuments, getOneDocument, addDocument, editDocument, deleteDocument } = require('../controllers/document.controller')

route.route('/document/').get(getDocuments)

route.route('/document/:iddocument').get(getOneDocument)

route.route('/document/').post(addDocument)

route.route('/document/:iddocument').put(editDocument)

route.route('/document/update/:iddocument').put(deleteDocument)


module.exports = route