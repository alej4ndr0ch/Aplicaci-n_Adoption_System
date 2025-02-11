import { Router } from "express";
import { check } from "express-validator";
import { savePet, searchPet, updatePet, deletePet } from "./pet.controller.js";
import { validarCampos } from "../middlewares/validar-campos.js"
import { validarJWT } from '../middlewares/validar-jwt.js'
import { getPets } from "./pet.controller.js";

const router = Router();

router.post(
    "/",
    [
        validarJWT,
        check('email', 'Este no es un correo valido').not().isEmpty(),
        validarCampos
    ],
    savePet
)

router.get("/", getPets)

router.get(
    "/:id",
    [
        validarJWT,
        check("id", "No es un ID valido").isMongoId(),
        validarCampos
    ],
    searchPet
)

router.put(
    "/:id",
    [
        validarJWT,
        check("id", "No es un ID válido").isMongoId(),
        validarCampos
    ],
    updatePet
)

router.delete(
    "/:id",
    [
        validarJWT,
        check("id", "No es un ID válido").isMongoId(),
        validarCampos
    ],
    deletePet
)

export default router;