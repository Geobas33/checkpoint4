const path = require('path');
const mysql = require('mysql');

module.exports = function(app) {

    app.get('/', function(req, res) {
        
        RTCPeerConnection.query('SELECT * FROM circius.users', function(err, data) {
            (err)?res.rend(err):res.json({users: data});

        })
    })
}