let SHA256 = require("crypto-js/sha256");
const {vkeys}=require("../Main");
class ValueTxn{
    constructor(fromA,to,amount,time){
        this.from=fromA;
        this.to=to;
        this.amount=amount;
        this.time=time;
        this.signature=null;
        this.type="ValueTransfer"
    }

    calculateHash(){
        return SHA256(this.from + this.to + this.amount+this.time)
                .toString();
    }
    
    signTransaction(signingKey){
        if(signingKey.value!== this.from){
            console.log(signingKey.value,this.from)
            throw new Error('You cannot sign transactions for other wallets!');
        }
        const hashTx = this.calculateHash();
        const sig = this.sign(signingKey.privKey.value, hashTx)
        this.signature = sig
    }
    sign(privKey,dataHash){
        return SHA256(privKey+dataHash).toString();
    }
    isValid(){
        if(this.from===null){
            return true
        }
        else{
            if(this.signature===this.sign(vkeys.pubKey.privKey.value,this.calculateHash())){
                console.log(this.signature,this.sign(vkeys.pubKey.privKey.value,this.calculateHash()))
                return true
            }else{
                console.log(this.signature,this.sign(vkeys.pubKey.privKey.value,this.calculateHash()))
                return false
            }
        }
    }
}

class DataTxn{
    constructor(fromA,data,time,signat){
        this.from=fromA;
        this.to=to;
        this.data=data;
        this.time=time;
        this.signature=signat;
        this.type="dataTransfer"
    }
}

class DataStoreTxn{
    constructor(ownerA,time,signat){
        this.owner=ownerA;
        this.time=time
        this.signature = signat
        this.type="dataStore"
    }
}
module.exports = {ValueTxn,DataTxn,DataStoreTxn}