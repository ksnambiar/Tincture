let fs=require("fs");
let bcip=require("./BlockChain/Chain");
const vkeys=JSON.parse(fs.readFileSync("./configFiles/key.json"))
const tincture = new bcip()
module.exports={
    vkeys,
    tincture
}

