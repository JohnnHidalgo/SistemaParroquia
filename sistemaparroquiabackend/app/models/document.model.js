'use strict'

const connection = require('../../config/connection')

var dataModels = {
    getDocuments: (callback) => {
        if (connection) {
            let sql = `select * from document`

            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback(rows)
            })
        }
    },
    getOneDocument: (data, callback) => {
        console.log("el iddocument : ", data)
        if (connection) {
            let sql = `select * from document where iddocument = ${connection.escape(data)}`

            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback(rows)
            })
        }
    },
    addDocument: (data, callback) => {

        if (connection) {
            let sql = `insert into document(title,tx_user,tx_date) values (${connection.escape(data.title)}, ${connection.escape(data.tx_user)}, ${connection.escape(data.tx_host)})`

            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback({ message: 'documento insertado' })
            })
        }
    },
    editDocument: (data, callback) => {
            if (connection) {
                let sql = `update document set title = ${connection.escape(data.title)} where iddocument = ${connection.escape(data.iddocument)}`
                connection.query(sql, (error, rows) => {
                    if (error) throw error
                    callback({ message: 'document actualizado' })
                })
            }
        }
        /*,
        deleteDocument: (data, callback) => {
            if (connection) {
                let sql = `delete from cars where id = ${connection.escape(data)}`

                connection.query(sql, (error, rows) => {
                    if (error) throw error
                    callback({ message: 'carro eliminado' })
                })
            }
        }*/
}

module.exports = dataModels