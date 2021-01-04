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
                    callback({ message: 'carro insertado' })
                })
            }
        }
        /*,
                            editDocument: (data, callback) => {
                                if (connection) {
                                    let sql = `update cars set marca = ${connection.escape(data.marca)}, descripcion = ${connection.escape(data.descripcion)} where id = ${connection.escape(data.id)}`

                                    connection.query(sql, (error, rows) => {
                                        if (error) throw error
                                        callback({ message: 'carro actualizado' })
                                    })
                                }
                            },
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