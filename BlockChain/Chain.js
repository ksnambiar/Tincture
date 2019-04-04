let Block = require('../Block/Block')
let _ = require("lodash")
class BlockChain{
    constructor(){
        this.chain=[this.addGenesisBlock()]
        //proof of work thing
        this.difficulty=4
        //txnPool
        this.PendingTxns=[]
        //proof of work : miner reward
        this.mReward=2;
    }
    addGenesisBlock(){
        return new Block(0,"0",0,"12/11/13",[],[],[],"gen_prof")
    }
    // addBlock(block){
    //     block.prevHash = this.getLatestBlock().currHash;
    //     // block.currHash=block.calc_Hash().toString()
    //     //proofof work
    //     block.mineBlock(this.difficulty);
    //     this.chain.push(block);
    // }
    createTransaction(txn){
        
        this.PendingTxns.push(txn)
    }
    getLatestBlock(){
        return this.chain[this.chain.length-1]
    }
    isChainValid(){
        for(let i=1;i<this.chain.length;++i){
            let currBlock = this.chain[i]
            let prevBlock = this.chain[i-1]
            
            if(currBlock.currHash!==currBlock.calc_Hash().toString()){
                console.log("1")
                return false
            }

            if(currBlock.prevHash!==prevBlock.currHash){
                console.log("2")
                return false
            }
        }
        if(!_.isEqual(this.chain[0],this.addGenesisBlock())){
            console.log(this.chain[0])
            console.log(this.addGenesisBlock())
            console.log("3")
            return false
        }
        return true
    }
}
module.exports = BlockChain