const express = require("express")
const router = express.Router()

router.get("/",(req,res)=>{
    res.status(200).json({message:"new route"})
})

router.get("/chain",(req,res)=>{
    
})
module.exports=router