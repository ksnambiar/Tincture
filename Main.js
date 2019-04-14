let fs=require("fs");
const vkeys=JSON.parse(fs.readFileSync("./configFiles/key.json"))
module.exports={
    vkeys
}