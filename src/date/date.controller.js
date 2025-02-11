import User from "../users/user.model.js";
import Date from "./date.model.js";
import Pet from "../pet/pet.model.js";

export const addDate = async (req, res) => {
    try {
        
        const data = req.body;
        const user = await User.findOne({ email: data.email });
        const pet = await Pet.findOne({ name: data.name });
        if(!user){
            return res.status(404).json({
                success: false,
                message: 'Dueño no encontrado'
            })
        }

        if(!pet){
            return res.status(404).json({
                success: false,
                message: 'Mascota no encontrado'
            })
        }


        const date = new Date({
            ...data,
            user: user._id,
            name: pet._id
        });

        await date.save();

        res.status(200).json({
            success: true,
            msg: "Cita agendada",
            date
        })

    } catch (error) {
        console.error(error)
        res.status(500).json({
            success: false,
            message: 'Error al agendar una cita',
            error
        })
    }
}