'use strict'

const personMaterialsModels = require('../models/personmaterial.model')
const connection = require('../../config/connection')

function getPersonMaterials(req, res, next) {
    console.log("id : ", req.params)
    const { idperson } = req.params
    personMaterialsModels.getPersonMaterials({ idperson }, (data, error) => {
        res.json(data)
    })
}

function getOnePersonMaterial(req, res) {
    console.log("id : ", req.params)
    const { idpersonmaterial } = req.params
    personMaterialsModels.getOnePersonMaterial({ idpersonmaterial }, (data, error) => {
        res.json(data)
    })
}

function addPersonMaterial(req, res) {
    const { idmaterial, idperson, state, active } = req.body
    console.log(`personmaterial : ${idmaterial}, ${idperson}, ${state}, ${active}`)
    personMaterialsModels.addPersonMaterial({ idmaterial, idperson, state, active }, (data, error) => {
        res.json(data)
    })
}

function editPersonMaterial(req, res) {
    const { idpersonmaterial } = req.params
    const { state } = req.body
    personMaterialsModels.editPersonMaterial({ idpersonmaterial, state }, (data, error) => {
        res.json(data)
    })
}

function deletePersonMaterial(req, res) {
    const { idpersonmaterial } = req.params
    console.log("delete/");
    personMaterialsModels.deletePersonMaterial(idpersonmaterial, (data, error) => {
        res.json(data)
    })
}

module.exports = {
    getPersonMaterials,
    getOnePersonMaterial,
    addPersonMaterial,
    editPersonMaterial,
    deletePersonMaterial
}