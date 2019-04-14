let block = require('./Block/Block')
let blockchain = require('./BlockChain/Chain')
let {ValueTxn} = require("./Block/Transaction")
let fs = require('fs');
let tincture = new blockchain();
let validator=JSON.parse(fs.readFileSync("./configFiles/key.json"))
// console.log(JSON.stringify(tincture))
tincture.minePendingTxns(validator.pubKey);
let tx1=new ValueTxn(validator.pubKey.value,"raghu",5);
tx1.signTransaction(validator.pubKey)
tincture.addTransaction(tx1)
// tincture.createTransaction(new ValueTxn("raghu","hello",3))
tincture.minePendingTxns(validator.pubKey);
// console.log(JSON.stringify(tincture))
console.log(tincture.isChainValid())
console.log('Balance of Xaviers address is', tincture.getBalanceOfAddress('sidharth'));
console.log('Balance of Xaviers address is', tincture.getBalanceOfAddress('raghu'));
console.log(tincture)
