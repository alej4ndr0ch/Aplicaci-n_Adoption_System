import { Schema, model } from "mongoose";

const DateSchema = Schema({
    name : {
        type: Schema.Types.ObjectId,
        ref: 'pet',
        required: true
    },
    description : {
        type : String,
        required : true
    },
    date : {
        type: String,
        required: true
    },
    place : {
        type : String,
        required : true
    }, 
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    status: {
        type: Boolean,
        default: true
    }
},
{
    timestamps: true,
    versionKey: false
});

export default model('date', DateSchema);