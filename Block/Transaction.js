class ValueTxn{
    constructor(fromA,to,amount,time,signat){
        this.from=fromA;
        this.to=to;
        this.amount=amount;
        this.time=time;
        this.signature=signat;
        this.type="Value"
    }
}

class DataTxn{
    constructor(fromA,data,time,signat){
        this.from=fromA;
        this.to=to;
        this.data=data;
        this.time=time;
        this.signature=signat;
    }
}

module.exports = {ValueTxn,DataTxn}