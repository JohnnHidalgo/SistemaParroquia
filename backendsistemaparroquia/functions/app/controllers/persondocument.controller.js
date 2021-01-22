'use strict'

const personDocumentsModels = require('../models/persondocument.model')
const connection = require('../../config/connection')

function getPersonDocuments(req, res, next) {
    console.log("id : ", req.params)
    const { idperson } = req.params
    personDocumentsModels.getPersonDocuments({ idperson }, (data, error) => {
        res.json(data)
    })
}

function getOnePersonDocument(req, res) {
    console.log("id : ", req.params)
    const { idpersondocument } = req.params
    personDocumentsModels.getOnePersonDocument({ idpersondocument }, (data, error) => {
        res.json(data)
    })
}

function addPersonDocument(req, res) {
    const { iddocument, idperson, state, documentdate, active } = req.body
    console.log(`persondocument : ${iddocument}, ${idperson}, ${state}, ${documentdate}, ${active}`)
    personDocumentsModels.addPersonDocument({ iddocument, idperson, state, documentdate, active }, (data, error) => {
        res.json(data)
    })
}

function editPersonDocument(req, res) {
    const { idpersondocument } = req.params
    const { documentdate, state } = req.body
    personDocumentsModels.editPersonDocument({ idpersondocument, documentdate, state }, (data, error) => {
        res.json(data)
    })
}

function deletePersonDocument(req, res) {
    const { idpersondocument } = req.params
    console.log("delete/");
    personDocumentsModels.deletePersonDocument(idpersondocument, (data, error) => {
        res.json(data)
    })
}

module.exports = {
    getPersonDocuments,
    getOnePersonDocument,
    addPersonDocument,
    editPersonDocument,
    deletePersonDocument
}