
const express = require("express");
const mongoose = require("mongoose");
const newuser = require("./amit.json");

const connect = ()=>{
    return mongoose.connect("mongodb://127.0.0.1:27017/web11")
}

const userSchema = new mongoose.Schema({
    id:{type:Number,required:true},
    first_name:{type:String,required:true},
    last_name:{type:String,required:false},
    email:{type:String,required:true},
    gender:{type:String,required:true},
})
const User = mongoose.model("user", userSchema);

const app = express();
app.use(express.json());













app.get("/users", async  (req,res) => {
    const user = await User.create(req.body)
    return res.send(newuser);
    
})

app.listen(2345, async function(){
    await connect();
    console.log("listening on npiort");
});