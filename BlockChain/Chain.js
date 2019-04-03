let Block = require('../Block/Block')
class BlockChain{
    constructor(){
        this.chain=[this.addGenesisBlock()]
    }
    addGenesisBlock(){
        return new Block(0,"0",0,"12/11/13",[],[],[],"gen_prof")
    }
    addBlock(block){
        block.prevHash = this.getLatestBlock().currHash;
        block.currHash=block.calc_Hash().toString()
        this.chain.push(block);
    }
    getLatestBlock(){
        return this.chain[this.chain.length-1]
    }
    
}
module.exports = BlockChain