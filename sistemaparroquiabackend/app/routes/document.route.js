'use strict'

const route = require('express').Router()
const { getDocuments, getOneCar, addCar, editCar, deleteCar } = require('../controllers/document.controller')

route.route('/').get(getDocuments)

route.route('/:id').get(getOneCar)

route.route('/').post(addCar)

route.route('/:id').put(editCar)

route.route('/:id').delete(deleteCar)


module.exports = route