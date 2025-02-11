import { Schema, model } from "mongoose";

const DateSchema = Schema({
    name : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    time : {
        type: Number,
        required: true
    },
    place : {
        type : String,
        required : true
    }, 
    email : {
        type : String,
        required : true
    },
    keeper: {
        type: Schema.Types.ObjectId,
        ref: 'pet',
        required: true
    }
},
{
    timestamps: true,
    versionKey: false
});

export default model('date', DateSchema);