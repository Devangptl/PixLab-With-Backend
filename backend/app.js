import connectDB from "./db/conn.js"
import cors from "cors"
import express from "express"
import dotenv from "dotenv"
import router from  './router/user.router.js'
import cookieParser from "cookie-parser"

// require("dotenv").config()
dotenv.config()
const app = express()

const port = process.env.PORT || 3001
connectDB()

app.use(cors())
app.use(cookieParser())
app.use(express.json())
app.use(router)

app.get("/" , (req, res)=>{
    res.status(200).json("server start")
})



// app.post('/login', (req, res)=>{
//     const {email , password} = req.body
//     User.findOne({email : email})
//     .then(user => {
//         if(user){
//             if(user.password === password){
//                 res.json("Success")
//                 console.log(user)
//                 res.send(user)
//             }else{
//                 res.json("The password is incorrect")
//             }
//         }else{
//             res.json("No record existed")
//         }
//     })
// })



  



app.listen(port,()=>{
    console.log(`server start at port no ${port}`)
})

