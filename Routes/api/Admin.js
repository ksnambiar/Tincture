const express = require("express");
const router = express.Router();
//TODO: add validation for admins
router.get("/",(req,res)=>{
    res.status(200).json({message:"admin route"})
})

//retrieving whole state
router.get("/state",(req,res)=>{
    res.status(200).json({data:state})
})
//retrieving state by id
router.get("/state/:id",(req,res)=>{
    res.status(200).json({data:state[req.params.id]})
})