const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
var express = require('express');
var apinode = express();

apinode.use(express.urlencoded({ extended: false }))
apinode.use(express.json())
apinode.use(require('./app/routes/document.route'))

exports.sistemaparroquiabackend = functions.https.onRequest(apinode);