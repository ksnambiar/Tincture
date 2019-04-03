let block = require('./Block/Block')
let blockchain = require('./BlockChain/Chain')

let tincture = new blockchain();

tincture.addBlock(new block(tincture.length,"",0,new Date()))
console.log(JSON.stringify(tincture))