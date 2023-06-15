const mongoose=require("mongoose");


const userSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    myId:{
        type:Number,
        unique:true
    },
    gender:{
        type:String,
        require:true
    },
    age:{
        type:String,
        require:true
    },
    mobile:{
       type:String,
       require:true
    },
    email:{
       type:String,
       require:true
    },
    password:{
      type:String,
      require:true
    },
    address:{
        type:String,
        require:true
    },
    position:{
        type:String, 
        require:true

    },
    referId:{
       type:Number
    },
    childs:{
        type:Array
    }

},{timestamps:true})

module.exports=mongoose.model("User",userSchema)