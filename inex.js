let block = require('./Block/Block')
let blockchain = require('./BlockChain/Chain')
let {ValueTxn} = require("./Block/Transaction")
let tincture = new blockchain();
// console.log(JSON.stringify(tincture))
tincture.minePendingTxns('sidharth');
tincture.createTransaction(new ValueTxn("sidharth","raghu",5))
tincture.createTransaction(new ValueTxn("raghu","hello",3))
tincture.minePendingTxns('sidharth');
// console.log(JSON.stringify(tincture))
console.log(tincture.isChainValid())
console.log('Balance of Xaviers address is', tincture.getBalanceOfAddress('sidharth'));
console.log('Balance of Xaviers address is', tincture.getBalanceOfAddress('raghu'));
console.log(tincture)
