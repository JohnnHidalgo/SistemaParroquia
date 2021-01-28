'use strict'

const connection = require('../../config/connection')

var godparentPersonsModels = {
    getGodParentPersons: (data, callback) => {
        if (connection) {
            let sql = `select * from godparentperson where active=true;`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback(rows)
            })
        }
    },

    getOneGodParentPerson: (data, callback) => {
        if (connection) {
            let sql = `select * from godparentperson where iddogparenperson = ${connection.escape(data.iddogparenperson)}`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback(rows)
            })
        }
    },

    getGodParentsByPerson: (data, callback) => {
        if (connection) {
            let sql = `select a.iddogparenperson, a.idperson, a.idparent, b.firstname, b.secondname, b.lastname, b.secondlastname from godparentperson a, godparent b where a.idperson = ${connection.escape(data.idperson)} and a.idgodparent = b.idgodparent and a.active = true`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback(rows)
            })
        }
    },

    addGodParentPerson: (data, callback) => {
        if (connection) {
            let sql = `insert into godparentperson(idperson,idgodparent,active) values (${connection.escape(data.idperson)}, ${connection.escape(data.idgodparent)}, ${connection.escape(data.active)})`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback({ message: 'godparentperson insertado' })
            })
        }
    },

    deleteGodParentPerson: (data, callback) => {
        if (connection) {
            let sql = `update godparentperson set active = false where iddogparenperson = ${connection.escape(data)}`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback({ message: 'godparentperson eliminado' })
            })
        }
    },

}

module.exports = godparentPersonsModels