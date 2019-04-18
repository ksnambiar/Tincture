let express = require("express")
let {tincture} = require("../../Main");
const {dataAccess} = require("../../StateHandling/TransactionHandlers/DataAccessHandler");
const {DataStoreTxn} = require("../../Block/Transaction");
const sha256 = require("crypto-js/sha256");
let router  = express.Router()
router.get("/",(req,res)=>{
    res.status(200).json({message:"Tincture Data Store"})
})
//accessing state information
//TODO:think of adding data access transaction
router.get("/state/:id",(req,res)=>{
    res.status(200).json({data:dataAccess(req.params.id)})
})
//creating a new store
router.get("/state/newStore/:id",(req,res)=>{
    let name = req.params.id

}) 

//adding data to personalised store
router.post("/state/:id",(req,res)=>{
    let data=req.body;
    let ret_obj = {}
    ret_obj.id = sha256(data)
    ret_obj.time= new Date().getTime()
    let dstTxn= new DataStoreTxn(ret_obj.id,data.owner,ret_obj.time,data.signature)
    tincture.addTransaction(dstTxn);
    res.status(200).json({message:"data added to transaction list"})
    //TODO: use leveldb for storage
    
})
module.exports = router