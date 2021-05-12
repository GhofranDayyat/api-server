// 'use strict';
// const express=require('express');
// const router = express.Router();


// const ModelCollection =require('../models/data-collection-class.js') ;
// const clothesModel = require('../models/clothes.js');
// const newFoodInst= new ModelCollection(clothesModel);


// //add router
// router.get('/clothes',getModel);
// router.get('/clothes:id',getOneMode);
// router.post('/clothes',createModel);
// router.put('/clothes:id',updatModel);
// router.delete('/clothes:id',deletModel);

// //function
// function getModel(req,res){
//   let getAll = newFoodInst.get().then(result=>{
//     res.status(200).json(result);
//   });


// }

// function getOneMode(req,res){
//   const id=req.params.id;
//   console.log(id);
//   let getOneModel = newFoodInst.get(id).then(result=>{
//     res.status(200).json(result);
//   });
// }

// function createModel(req,res){
//   let obj = req.body;
//   newFoodInst.create(obj).then(result=>{
//     res.status(201).json(result);
//   }
//   );

// }
// function updatModel(req,res){
//   const id = req.params.id;
//   const obj = req.body;
//   console.log(obj);
//   let updateModel = newFoodInst.update(id,obj).then(result=>{
//     res.status(200).json(result);
//   });
// }
// function deletModel(req,res){
//   const id = req.params.id;
//   console.log(id);
//   let deleteModel = newFoodInst.delete(id).then(result=>{
//     res.status(202).json({result});
//   });
// }
// module.exports={
//   router,
// };
