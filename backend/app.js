import connectDB from "./db/conn.js"
import cors from "cors"
import express from "express"
import dotenv from "dotenv"
import { User } from "./model/user.model.js"

// require("dotenv").config()
dotenv.config()
const app = express()

const port = process.env.PORT || 3001
connectDB()

app.use(cors())

app.use(express.json())

app.get("/" , (req, res)=>{
    res.status(200).json("server start")
})

app.post('/signup', (req,res)=>{
    User.create(req.body)
    .then(data => res.json(data)).
    catch(err => res.json(err))
})

app.post('/login', (req, res)=>{
    const {email , password} = req.body
    User.findOne({email : email})
    .then(user => {
        if(user){
            if(user.password === password){
                res.json("Success")
            }else{
                res.json("The password is incorrect")
            }
        }else{
            res.json("No record existed")
        }
    })
})



  



app.listen(port,()=>{
    console.log(`server start at port no ${port}`)
})

