import User from "../users/user.model.js";
import Date from "./date.model.js";

export const addDate = async (req, res) => {
    try {
        
        const data = req.body;
        const user = await User.findOne({ email: data.email});
        if(!user){
            return res.status(404).json({
                success: false,
                message: 'cita no agendada'
            })
        }

        const date = new Date({
            ...data,
            keeper: user._id
        });

        await date.save();

        res.status(200).json({
            success: true,
            date
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error al agendar una cita',
            error
        })
    }
}