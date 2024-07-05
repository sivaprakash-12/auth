const register = require("../models/register&log")
const bcrypt=require('bcrypt');
const jwt = require('jsonwebtoken')






const login = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      const user = await register.findOne({ email: email });
      if (!user) {
        res.json({
          Message: "Email not found. Please register to login...",
        });
      }
  
      let comparePassword = await bcrypt.compare(password, user.password);
  
      if (!comparePassword) {
        res.json({
          Message: "Password not found. Please register to login...",
        });
      }
  
      let token = await jwt.sign({ userId: user.userId }, process.env.SECRET_KEY, { expiresIn: "1h" });
  
      user.token = token;
  
      const userData = await user.save();
  
      res.json({
        Data: userData,
        Message: " successfull Your the valid user ",
      });
    } catch (error) {
      res.json({
        Error: error.message,
      });
    }
  };

module.exports=login