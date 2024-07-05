const express= require("express");
const router =express.Router();
const {userRegister}=require('../controller/Reg&log')

const login=require('../controller/Login')



router.post("/register",userRegister);
router.post("/login",login);



module.exports =router;