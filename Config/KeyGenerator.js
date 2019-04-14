let EC = require("elliptic").ec;
const fs = require('fs');
let ec = new EC('secp256k1');

const entry = (path="../configFiles/key.json")=>{
    
    fs.writeFile(path,JSON.stringify(genKeyPair()),(err)=>{
        return err
    })
}
// fs.readFile(path,(err,data)=>{
//     if(err){

function genKeyPair(){       
const validFile={
    "address":"",
    "pubKey":{
        "type":"Tincture\/PubKeysecp256k1",
        "value":"",
        "privkey":{
            "type":"Tincture\/PrivKeysecp256k1",
            "value":""
        }
    }
}

const key = ec.genKeyPair();
const publicKey = key.getPublic('hex');
const privateKey = key.getPrivate('hex');
validFile.pubKey.value=publicKey;
validFile.pubKey.privkey.value=privateKey;
return validFile
}
entry()
module.exports = entry;