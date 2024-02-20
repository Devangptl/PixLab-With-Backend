import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    },
    email: { 
        type: String, 
        required: true 
    },
    password: { 
        type: String, 
        required: true 
    },
    image :{
        type:String
    },
    googleId :{
        type :String
    }
}, { timestamps: true })

 export const User = mongoose.model("User", userSchema)