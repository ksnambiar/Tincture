let express = require("express")
let app = express()
let r1 = require("./Routes/api/Route1");
const bodyParser = require("body-parser")
app.use(bodyParser.json());
app.use(bodyParser.urlencoded())
app.get("/",(req,res)=>{
    res.status(200).json({message:"tincture api"})
})

app.use("/api/tincture",r1)
const port = process.env.PORT || 5000
app.listen(port,()=>{
    console.log("running on"+port)
})