'use strict'

const connection = require('../../config/connection')

var materialModels = {
    getMaterials: (callback) => {
        if (connection) {
            let sql = `select * from material where active=true`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback(rows)
            })
        }
    },
    getOneMaterial: (data, callback) => {
        console.log(`el iddocument : ${data}`)
        if (connection) {
            let sql = `select * from material where idmaterial = ${connection.escape(data.idmaterial)}`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback(rows)
            })
        }
    },
    addMaterial: (data, callback) => {

        if (connection) {
            let sql = `insert into material(title,tx_user,tx_date,active) values (${connection.escape(data.title)}, ${connection.escape(data.tx_user)}, ${connection.escape(data.tx_date)}, ${connection.escape(data.active)})`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback({ message: 'documento insertado' })
            })
        }
    },
    editMaterial: (data, callback) => {
        if (connection) {
            let sql = `update material set title = ${connection.escape(data.title)} where idmaterial = ${connection.escape(data.idmaterial)}`
            console.log(sql);
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback({ message: 'document actualizado' })
            })
        }
    },
    deleteMaterial: (data, callback) => {
        if (connection) {
            let sql = `update material set active = false where idmaterial = ${connection.escape(data)}`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback({ message: 'document eliminado' })
            })
        }
    }
}

module.exports = materialModels