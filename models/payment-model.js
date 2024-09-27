import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
    customer_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        // required: true,
    }, 
    amount : {
        type: Number,
     required: true,      
    },
    paymenttype : {
        type : String,
        required : true,
    },
    status : {
        type : String,
    },

}, {
    timestamps : true,
})

let payment = mongoose.model("payments", paymentSchema);
export default payment