let express = require("express")
let {state} = require("../../StateHandling/State");
const {dataAccess} = require("../../StateHandling/TransactionHandlers/DataAccessHandler");
let router  = express.Router()
router.get("/",(req,res)=>{
    res.status(200).json({message:"Tincture Data Store"})
})
//accessing state information
router.get("/state/:id",(req,res)=>{
    res.status(200).json({data:dataAccess(id)})
})

module.exports = router