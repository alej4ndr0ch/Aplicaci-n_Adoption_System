import { type } from "express/lib/response";
import mongoose, { Schema } from "mongoose";

const UserSchema = mongoose.Schema({
    nombre : {
        type: String,
        required: [true, "El nombre es requerido"],
    },
    correo : {
        type: String,
        required: [true, "El correo es requerido"],
        unique : true,
    },
    password : {
        type: String,
        required: [true, "La contraseña es requerido"],
    },
    img: {
        type: String,
    },
    phone: {
        type: String,
        minLegth: 8,
        maxLegth: 10,
        required: true,
    },
    role : {
        type: String,
        required: true,
        enum: ["ADMIN_ROLE", "USER_ROLE"],
    },
    estado: {
        type: Boolean,
        default: true,
    },
    google: {   
        type: Boolean,
        default: false,
    }
});

UserSchema.methods.toJSON = function () {
    const { __v, password, _id, ...usuario} = this.toObject();
    usuario.uid = _id;
    return usuario;
}

export default mongoose.model('user', UserSchema);