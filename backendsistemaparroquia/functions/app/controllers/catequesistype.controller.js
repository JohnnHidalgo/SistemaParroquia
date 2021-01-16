'use strict'

const catequesistypeModels = require('../models/catequesistype.model')
const connection = require('../../config/connection')



function getCatequesistypes(req, res, next) {
    catequesistypeModels.getCatequesistypes((data, error) => {
        res.json(data)
    })
}

function getOneCatequesistype(req, res) {
    console.log("id : ", req.params)
    const { idcatequesistype } = req.params
    catequesistypeModels.getOneCatequesistype({ idcatequesistype }, (data, error) => {
        res.json(data)
    })
}

function getOneCatequesistypeByType(req, res) {
    console.log("catequesistype : ", req.params)
    const { catequesistype } = req.params
    catequesistypeModels.getOneCatequesistypeByType({ catequesistype }, (data, error) => {
        res.json(data)
    })
}

function addCatequesistype(req, res) {
    const { catequesistype, tx_user, tx_date, active } = req.body
    catequesistypeModels.addCatequesistype({ catequesistype, tx_user, tx_date, active }, (data, error) => {
        res.json(data)
    })
}

function editCatequesistype(req, res) {
    const { idcatequesistype } = req.params
    const { catequesistype } = req.body
    catequesistypeModels.editCatequesistype({ idcatequesistype, catequesistype }, (data, error) => {
        res.json(data)
    })
}

function deleteCatequesistype(req, res) {
    const { idcatequesistype } = req.params
    catequesistypeModels.deleteCatequesistype(idcatequesistype, (data, error) => {
        res.json(data)
    })
}

module.exports = {
    getCatequesistypes,
    getOneCatequesistype,
    getOneCatequesistypeByType,
    addCatequesistype,
    editCatequesistype,
    deleteCatequesistype
}