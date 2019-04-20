let express = require("express")
let {tincture} = require("../../Main");
const {dataAccess} = require("../../StateHandling/TransactionHandlers/DataAccessHandler");
const {writeData,createBranch,createSubStore} = require("../../StateHandling/TransactionHandlers/DataWriteHandler");
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
//adding data to personalised store
router.post("/state/:store/addData/:branch",(req,res)=>{
    let data=req.body;
    let store=req.param.store;
    let branch=req.params.branch;
    let ret_obj = {}
    ret_obj.id = sha256(data)
    ret_obj.time= new Date().getTime()
    let dstTxn= new DataStoreTxn(ret_obj.id,data.owner,ret_obj.time,data.signature)
    tincture.addTransaction(dstTxn);
    console.log(writeData(store,branch,data.data))
    res.status(200).json({message:"data added to transaction list"})
    //TODO: use leveldb for storage
})

router.post("/state/newSubStore/:store",(req,res)=>{
    let name=req.params.store;
    let data = req.body;
    let ret_obj = {}
    ret_obj.id = sha256(data)
    ret_obj.time= new Date().getTime()
    let dstTxn= new DataStoreTxn(ret_obj.id,data.owner,ret_obj.time,data.signature)
    tincture.addTransaction(dstTxn)
    console.log(createSubStore(name))
    res.status(200).json({message:"sub store created successfully",data:name})
})

router.post("/state/:store/newBranch/:branch",(req,res)=>{
    let name=req.params.branch;
    let store = req.params.store;
    let data = req.body;
    let ret_obj = {}
    ret_obj.id = sha256(data)
    ret_obj.time= new Date().getTime()
    let dstTxn= new DataStoreTxn(ret_obj.id,data.owner,ret_obj.time,data.signature)
    tincture.addTransaction(dstTxn)
    console.log(createBranch(store,name));
    res.status(200).json({message:"branch created successfully",data:name})
})
//adding branches
module.exports = router