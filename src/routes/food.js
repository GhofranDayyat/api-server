'use strict';
const express=require('express');
const router = express.Router();


const foodModel = require('../models/food.js');
const clothesModel = require('../models/clothes.js');

const modelCollection =require('../models/data-collection-class.js') ;
const newFoodInst= new modelCollection(foodModel);
const newClothesInst= new modelCollection(clothesModel);

let newModels;
function checkingEndPoint(req, res, next){
  console.log( req.path,'checking path' );
  if (req.path==='/food'){
    newModels= newFoodInst;
  }else if(req.path==='/clothes'){
    newModels= newClothesInst;
  }
  next();
}

//add router
router.get('/',getModel);
router.get('/:id',getOneMode);
router.post('/',createModel);
router.put('/:id',updatModel);
router.delete('/:id',deletModel);

//function

//using then
function getModel(req,res){
  let getAll = newModels.get().then(result=>{
    res.status(200).json(result);
  });
}


//using async
// async function getModel(req,res){
//   let getAll =await newModels.get()
//     res.status(200).json(getAll);
// }

function getOneMode(req,res){
  const id=req.params.id;
  console.log(id);
  let getOneModel = newModels.get(id).then(result=>{
    res.status(200).json(result);
  });
}

function createModel(req,res){
  let obj = req.body;
  let newModel =newModels.create(obj).then(e=>{

    res.status(201).json(e);
  });

}
function updatModel(req,res){
  const id = req.params.id;
  const obj = req.body;
  console.log(obj);
  let updateModel = newModels.update(id,obj).then(result=>{
    res.status(200).json(result);
  });
}
function deletModel(req,res){
  const id = req.params.id;
  console.log(id);
  let deleteModel = newModels.delete(id).then(result=>{
    res.status(202).json({result});
  });
}
module.exports={
  router,
  checkingEndPoint
};
