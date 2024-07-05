const express=require("express")
const connect=require("./common/cluster");
const authRoute =require('./routes/authRoute');


require("dotenv").config();

const app= express();

app.use(express.json());

app.use(authRoute);


connect();



app.use("/", (req,res)=>{
    res.send("its working ");

});

const Port=4000
app.listen(Port,()=>{
    console.log("server is running:",Port);
})



 