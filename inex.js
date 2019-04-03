let block = require('./Block/Block')
let blockchain = require('./BlockChain/Chain')

let tincture = new blockchain();
console.log(JSON.stringify(tincture))
tincture.addBlock(new block(tincture.length,"",0,new Date().getTime()))
tincture.addBlock(new block(tincture.length,"",0,new Date().getTime()))
console.log(JSON.stringify(tincture))