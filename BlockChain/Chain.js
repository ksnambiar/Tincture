let Block = require('../Block/Block')
class BlockChain{
    constructor(){
        this.chain=[]
    }
    addGenesisBlock(){
        return new Block(this.chain.length,"0",0,"12/11/13",[],[],[],"gen_prof")
    }
    addBlock(block){
        block.previousHash = this.getLatestBlock().currHash;
        block.currHash=block.calculateHash()
        this.chain.push(newBlock);
    }
    getLatestBlock(){
        return this.chain[this.chain.length-1]
    }

}
module.exports = BlockChain