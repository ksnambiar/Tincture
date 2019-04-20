var db = require("../DB");
let state={
    euphony:{}
} ;

// db.get("state",(err,val)=>{
//     if(err){
//         let data={
           
//         }
//         db.put("state",JSON.stringify(data),(err)=>{
//             db.get("state",(err,val)=>{
//                 state=JSON.parse(val)
//             })
//         })
//     }else{
//     state=JSON.parse(val)
//     console.log(state)
//     }
// })


const updateDB = ()=>{
    db.put("state",JSON.stringify(state),(err)=>{
        console.log(err)
    });
    }
// db.put("state",state,(err)=>{
//     console.log("some error")
// })
// db.put("state/euphony",JSON.stringify(state),(err)=>{
//     // Object.keys(val).forEach(obj=>{
//     //     console.log()
//     // })
// })

// db.get("euphony",(err,val)=>{
//     console.log(val)
// })
// db.createReadStream()
//   .on('data', function (data) {
//     console.log(data.key, '=', data.value)
//   })
//   .on('error', function (err) {
//     console.log('Oh my!', err)
//   })
//   .on('close', function () {
//     console.log('Stream closed')
//   })
//   .on('end', function () {
//     console.log('Stream ended')
//   })

module.exports = {state,updateDB};