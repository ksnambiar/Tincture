let fs=require("fs");
let bcip=require("./BlockChain/Chain");
const {updateDB} = require("./StateHandling/State");
const vkeys=JSON.parse(fs.readFileSync("./configFiles/key.json"))
let validator=JSON.parse(fs.readFileSync("./configFiles/key.json"))
const tincture = new bcip()
const validateTxn = ()=>{
    if(tincture.PendingTxns.length!==0){
        tincture.minePendingTxns(validator.pubKey.value); 
        //updating
    }else{
        console.log("empty pool skipping block creation")
    }
}
setInterval(validateTxn,10*1000);

module.exports={
    vkeys,
    tincture
}

