const { Module } = require("module");
const mongoose=require("mongoose");
const connection =()=>{
    mongoose.connect("mongodb+srv://sivaprakashsiva1204:hlTByiRhfOANu9PR@cluster0.rdothge.mongodb.net/usersiva")
    .then(()=>console.log("Mongodb is connected"))
    .catch((er)=>console.log("Connection error:",er.message))

};


module.exports = connection;