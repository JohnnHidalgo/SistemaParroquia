const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
var express = require('express');
var apinode = express();
var cors = require('cors')

apinode.use(express.urlencoded({ extended: false }))
apinode.use(express.json())
apinode.use(require('./app/routes/document.route'))
apinode.use(require('./app/routes/material.routes'))
apinode.use(require('./app/routes/person.route'))

apinode.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
});


exports.sistemaparroquiabackend = functions.https.onRequest(apinode);