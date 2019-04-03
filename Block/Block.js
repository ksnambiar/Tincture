let sha256 = require("crypto-js/sha256");
class Block{
    constructor(lastLen,last_hash="",total_txn=0,timeStamp,txns=[],validator_set=[],signatures=[],proof=""){
        this.height=lastLen+1;
        this.currHash=this.calc_Hash();
        this.prevHash=last_hash;
        this.total_txn=total_txn;
        this.curr_txns=0;
        this.proof=proof;
        this.timeStamp=timeStamp
        this.txns=txns
        this.validators=validator_set;
        this.signatures=signatures;
    }
    calc_Hash(){
        return sha256(this.prevHash+this.height+this.total_txn.toString()+this.curr_txns.toString()+this.proof+this.timeStamp+JSON.stringify(this.txns).toString()+JSON.stringify(this.validators).toString()+JSON.stringify(this.signatures).toString())
    }
}

module.exports=Block