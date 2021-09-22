const mongoose = require("mongoose")

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.PASSWORD);

mongoose.connect(DB, 
    {useNewUrlParser: true,
    
    })
    .then((doc) => {
        console.log("DATABASE is connected ")
    })


    const formsSchema = new mongoose.Schema({
        name:{
            type:String,
        },
        email:{
            type:String,
        }, 
        phone: {
            type:Number,
        },
        message: {
            type:String,
        },
        date: {
            type:Date,
            required:true,
            default:Date
        }
    }

    )

    const Forms = mongoose.model("Forms", formsSchema)

    module.exports = Forms;