"use strict";

var dbschema = require('../modules/db');
var Table = dbschema.Table;

module.exports = function(app){
    app.get('/data/tables',function(req,res,next){

        Table.find({}, function(err,docs){
            res.json(
                {result:docs}
            );
         })	
    });//tables
}

