import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name : {
        type: String,
        required : true,       
    },
    userName : {
        type : String,
        required : true,
        unique : true,
    },
    password : {
        type : String,
        required : true,
        minlength : [8 , "atleast 8 characters required"],

    },
    email : {
        type : String,
        required : true,
        unique : true,
    },
image:{
    type: String

    // type: [String]
}

}, {
    timestamps : true,
})

let user = mongoose.model("users", userSchema);
export default user