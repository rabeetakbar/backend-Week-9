import mongoose from "mongoose";


const reviewSchema=new mongoose.Schema(
    {
    name : {
            type: String,
            required : true,       
        },
        email : {
            type : String,
            required : true,
        },
        detailedreviews: {
            type : String,
        },
        rating : {
            type : Number,
            required : true,
        },
        user : {
            type : mongoose.Schema.Types.ObjectId,
        ref:"users",
        // required:true
            },



    },
    {
        timestamps : true,
    })
    
    let review = mongoose.model("reviews", reviewSchema);
    export default review