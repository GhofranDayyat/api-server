'use strict';
class Modeling{
  constructor(model){
    this.model=model;
  }
  get(_id){
    if(_id){
      return this.model.findById(_id);
    } else{
      return this.model.find({}); ///passing nothing to get all recoreds
    }

  }
  getBy(obj){
    return this.model.find(obj);
  }
  create(obj){
    let newModel = new this.model(obj);
    return newModel.save();
  }
  update(_id,obj){
    return this.model.findByIdAndUpdate(_id,obj,{new:true});
  }
 async delete(_id){
    let checkDeleted;
    let deleteResult = await this.model.findById(_id)
    if(deleteResult) {
        await this.model.findByIdAndDelete(_id)
        checkDeleted = true
    } else {
        checkDeleted = false
    }
    return checkDeleted

  }


}


module.exports=Modeling