import { validationResult } from "express-validator";
import { validaJWT } from "./validar-jwt";

export const validarCampos = (req, res, next) =>{
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json(errors);
    }

    next();
}