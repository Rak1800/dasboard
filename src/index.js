const express= require("express");
const mongoose= require("mongoose");
const  route = require("./routes/route");
const cors= require("cors")

const app=express();  

app.use(express.urlencoded({extended:true}));
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://Rak18000:Rakesh123@cluster0.xntrj.mongodb.net/mlm-Dashboard",{
    useNewUrlParser:true
}).then(()=>{console.log("mongodb is connected")})
.catch((error)=>{console.log(error)})

app.use("/",route)

app.listen(process.env.PORT || 5000 ,()=>{
    console.log("sever is running on port "+(process.env.PORT || 5000))
})