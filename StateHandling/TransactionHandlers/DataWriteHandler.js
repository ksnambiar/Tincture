
let {state} = require("../State");
let uuid4 = require("uuid/v4");

const writeData=(store,branch,data)=>{
    let  newKey=uuid4().toString()
    state[store][branch][newKey]=data
    // updateDB()
    return newKey;
}

const createBranch=(store,branch)=>{
    state[store][branch]={status:"branch"}
    // updateDB()
    return state[store]
}

const createSubStore = (store)=>{
    state[store]={status:"store"}
    // updateDB()
    return state[store]
}
module.exports = {createBranch,createSubStore,writeData}