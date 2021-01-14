'use strict'

const materialModels = require('../models/material.model')
const connection = require('../../config/connection')


function getMaterials(req, res, next) {
    materialModels.getMaterials((data, error) => {
        res.json(data)
    })
}

function getOneMaterial(req, res) {
    console.log("id : ", req.params)
    const { idmaterial } = req.params
    materialModels.getOneMaterial({ idmaterial }, (data, error) => {
        res.json(data)
    })
}

function addMaterial(req, res) {
    const { title, tx_user, tx_date, active } = req.body
    console.log(`document : ${title}, ${tx_user}, ${tx_date}, ${active}`)
    materialModels.addMaterial({ title, tx_user, tx_date, active }, (data, error) => {
        res.json(data)
    })
}

function editMaterial(req, res) {
    const { idmaterial } = req.params
    const { title } = req.body
    materialModels.editMaterial({ idmaterial, title }, (data, error) => {
        res.json(data)
    })
}

function deleteMaterial(req, res) {
    const { idmaterial } = req.params
    materialModels.deleteMaterial(idmaterial, (data, error) => {
        res.json(data)
    })
}

module.exports = {
    getMaterials,
    getOneMaterial,
    addMaterial,
    editMaterial,
    deleteMaterial
}