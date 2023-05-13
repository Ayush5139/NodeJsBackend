const express = require("express")
const route = require("./router")
const bodyParse = require("body-parser")
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(cors({
    origin:"*"
}))

app.use("/",route)



app.get("/",(req,res)=>{
    res.send("Home Page")
})

app.listen(8000,()=>{
    console.log("App Running on 8000")
})