'use strict';
// dynamic schema from mongooe packegs
const mongoose = require('mongoose');
const clothesSchema = mongoose.Schema({
  type:{type: String, required:true},
  size:{type:Number, required:true},
  color:{type:String,enum : ['RED','BLUE']}
});


// a schema is the structure of my object in this collection
// a model is a wrapper for the schema


const clothesModel = mongoose.model('clothes',clothesSchema);
module.exports= clothesModel;
