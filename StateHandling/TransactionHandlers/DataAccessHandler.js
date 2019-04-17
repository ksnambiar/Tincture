const {state} = require("../State");

//TODO: implement data encoding and decoding
const dataAccess = (id)=>{
    return state[id]
}
//TODO: branch access specifier
const branchAccess = (path1)=>{
    let pathArr = path1.split("/");
    let dat=null;
    pathArr.forEach(ele => {
        if(dat===null){
        dat=state[ele]
        }else{
            dat=dat[ele]
        }
    });
    return dat;
}

module.exports = {
    dataAccess,
    branchAccess
}