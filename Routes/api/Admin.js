const express = require("express");
const router = express.Router();
const chain = require("../../BlockChain/Chain");
//TODO: add validation for admins
router.get("/",(req,res)=>{
    res.status(200).json({message:"admin route"})
})
