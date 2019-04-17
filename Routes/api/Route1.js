const express = require("express")
const {tincture,txn_pool} = require("../../Main");
let {ValueTxn} = require("../../Block/Transaction")
const sha256 = require("crypto-js/sha256")
const router = express.Router()

router.get("/",(req,res)=>{
    res.status(200).json({message:"new route"})
})
//getting the complete chain data
router.get("/chain",(req,res)=>{
    res.status(200).json({data:tincture.chain})
})

//getting the block data at a certain chain height 
router.get("/chain/:height",(req,res)=>{
    if(req.params.height>tincture.chain.length){
        res.status(404).json({message:"block not found/does not exist yet"})
    }else{
        res.status(200).json({data:tincture.chain[req.params.height-1]})
    }
})

//see the traansaction pool
router.get("/txnpool",(req,res)=>{
    res.status(200).json({data:tincture.PendingTxns})
})

//submitting a transaction into the transaction pool
router.post("/transaction",(req,res)=>{
let data=req.body;
let ret_obj={}
ret_obj.time=new Date().getTime()
data.time=ret_obj.time;
ret_obj.txn_id=sha256(data).toString()
let transaction = new ValueTxn(ret_obj.txn_id,data.from,data.to,data.amount,data.time,data.signature)
tincture.addTransaction(transaction)
res.status(200).json({message:"transaction added successfully",
data:ret_obj})
})
module.exports=router