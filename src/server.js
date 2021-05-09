'use strict';
const mongoose=require('mongoose');
const express = require('express');


const app = express();
app.use(express.json());



const handleError=require('./error-handlers/500.js');
const errorNotFound=require('./error-handlers/404.js');


const Router = require('./routes/food.js');
const router=Router.router;
const check=Router.checkingEndPoint;




app.use(check);
app.use('/food',router);
app.use('/clothes',router);

// app.get('/',(req,res)=>{
//   res.status(200).send('hello');
// });


// app.get('/bad-req',(req,res)=>{
//   throw new Error('Manual error Request');
// });

app.use(handleError);
app.use('*',errorNotFound);


function start(port,MONGODB_URL){
  mongoose.connect(MONGODB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }).then(() => {
    app.listen(port,()=>console.log(`listening on PORT${port}`));
    console.log(`connect to DB`);
  });
}




module.exports={
  app,
  start,

};
