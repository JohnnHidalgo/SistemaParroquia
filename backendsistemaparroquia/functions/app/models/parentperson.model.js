'use strict'

const connection = require('../../config/connection')

var parentPersonsModels = {
    getParentPersons: (data, callback) => {
        if (connection) {
            let sql = `select * from parentperson where active = true`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback(rows)
            })
        }
    },

    getOneParentPerson: (data, callback) => {
        if (connection) {
            let sql = `select a.idparentperson, a.idperson, a.idparent, b.firstname, b.secondname, b.lastname, b.secondlastnamefrom parentperson a, parent b where a.idperson = ${connection.escape(data.idperson)} and a.idparent = b.idparent and a.active = true;`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback(rows)
            })
        }
    },

    getParentsByPerson: (data, callback) => {
        if (connection) {
            let sql = `select * from parentperson where idparentperson = ${connection.escape(data.idparentperson)}`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback(rows)
            })
        }
    },

    addParentPerson: (data, callback) => {
        if (connection) {
            let sql = `insert into parentperson(idperson,idparent,active) values (${connection.escape(data.idperson)}, ${connection.escape(data.idparent)}, ${connection.escape(data.active)})`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback({ message: 'parentperson insertado' })
            })
        }
    },

    deleteParentPerson: (data, callback) => {
        if (connection) {
            let sql = `update parentperson set active = false where idparentperson = ${connection.escape(data)}`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback({ message: 'parentperson eliminado' })
            })
        }
    },

}

module.exports = parentPersonsModels