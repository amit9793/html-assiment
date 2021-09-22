
const express = require('express');
const users = require("./MOCK_DATA (1).json")
const app = express();

app.get("/",function(req,res){
    res.send("Welcome to home page")
})

app.get("/user",function(req,res){
    res.send(users)
})

app.listen(2345,function(){
    console.log("listening on port");

})