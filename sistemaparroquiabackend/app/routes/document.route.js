'use strict'

const route = require('express').Router()
const { getDocuments, getOneDocument, addDocument, editDocument, deleteDocument } = require('../controllers/document.controller')

route.route('/').get(getDocuments)

route.route('/:id').get(getOneDocument)

route.route('/').post(addDocument)

route.route('/:id').put(editDocument)

route.route('/:id').delete(deleteDocument)


module.exports = route