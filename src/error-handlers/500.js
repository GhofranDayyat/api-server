'use strict';
function handleError(req,res,error,next){
  res.status(500).json({
    error:error,
    msg:`server error is ${error}`,
    path:req.path
  });
}
module.exports=handleError;
