let sha256 = require("crypto-js/sha256");
class Block{
    constructor(lastLen,last_hash="",total_txn=0,timeStamp,txns=[],validator_set=[],signatures=[],proof=""){
        this.height=lastLen+1;
        this.currHash="DASGERGDV545454s5df8sd68c4sd8c48sadc54fd4s5c158486c8s8we"
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
        return sha256(this.prevHash+this.height+this.total_txn+this.curr_txns+this.proof+this.timeStamp+JSON.stringify(this.txns)+JSON.stringify(this.validators)+JSON.stringify(this.signatures))
    }
}

module.exports=Block