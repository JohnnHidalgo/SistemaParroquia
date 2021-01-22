'use strict'

const connection = require('../../config/connection')

var personMaterialsModels = {

    getPersonMaterials: (data, callback) => {
        if (connection) {
            let sql = `select b.idpersonmaterial, b.idperson, a.title, b.state from material a, personmaterial b where b.idperson = ${connection.escape(data.idperson)} and a.idmaterial = b.idmaterial and b.active = true`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback(rows)
            })
        }
    },

    getOnePersonMaterial: (data, callback) => {
        if (connection) {
            let sql = `select * from personmaterial where idpersonmaterial = ${connection.escape(data.idpersonmaterial)}`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback(rows)
            })
        }
    },
    addPersonMaterial: (data, callback) => {
        if (connection) {
            let sql = `insert into personmaterial(idmaterial,idperson,state,active) values (${connection.escape(data.idmaterial)}, ${connection.escape(data.idperson)}, ${connection.escape(data.state)}, ${connection.escape(data.active)})`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback({ message: 'personmaterial insertado' })
            })
        }
    },
    editPersonMaterial: (data, callback) => {
        if (connection) {
            let sql = `update personmaterial set documentdate = ${connection.escape(data.documentdate)},  state = ${connection.escape(data.state)} where idpersondocument = ${connection.escape(data.idpersondocument)}`
            console.log(sql);
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback({ message: 'personmaterial actualizado' })
            })
        }
    },

    deletePersonMaterial: (data, callback) => {
        if (connection) {
            let sql = `update personmaterial set active = false where idpersonmaterial = ${connection.escape(data)}`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback({ message: 'personmaterial eliminado' })
            })
        }
    },

}

module.exports = personMaterialsModels