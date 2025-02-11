import { Router } from "express";
import { check } from "express-validator";
import { addDate } from "./date.controller.js";
import { validarCampos } from "../middlewares/validar-campos.js"

const router = Router();

router.post(
    "/",
    [
        check("email", "Este no es un correo válido").not().isEmpty(),
        check("name", "La mascota no existe en la base de datos").not().isEmpty(),
        validarCampos
    ],
    addDate
)

export default router;