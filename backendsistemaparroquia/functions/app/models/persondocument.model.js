'use strict'

const connection = require('../../config/connection')

var personDocumentsModels = {
    getPersonDocuments: (data, callback) => {
        if (connection) {
            let sql = `select b.idpersondocument, b.idperson, a.title, b.state, b.documentdate from document a, persondocument b where b.idperson = ${connection.escape(data.idperson)} and a.iddocument = b.iddocument and b.active = true`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback(rows)
            })
        }
    },
    getOnePersonDocument: (data, callback) => {
        if (connection) {
            let sql = `select * from persondocument where idpersondocument = ${connection.escape(data.idpersondocument)}`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback(rows)
            })
        }
    },
    addPersonDocument: (data, callback) => {
        if (connection) {
            let sql = `insert into persondocument(iddocument,idperson,state,documentdate,active) values (${connection.escape(data.iddocument)}, ${connection.escape(data.idperson)}, ${connection.escape(data.state)}, ${connection.escape(data.documentdate)}, ${connection.escape(data.active)})`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback({ message: 'persondocument insertado' })
            })
        }
    },
    editPersonDocument: (data, callback) => {
        if (connection) {
            let sql = `update persondocument set documentdate = ${connection.escape(data.documentdate)},  state = ${connection.escape(data.state)} where idpersondocument = ${connection.escape(data.idpersondocument)}`
            console.log(sql);
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback({ message: 'persondocument actualizado' })
            })
        }
    },

    deletePersonDocument: (data, callback) => {
        if (connection) {
            let sql = `update persondocument set active = false where idpersondocument = ${connection.escape(data)}`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback({ message: 'persondocument eliminado' })
            })
        }
    },

}

module.exports = personDocumentsModels