import rateLimit from 'express-rate-limit';

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: {
        msg: "Demasiadas peticiones desde esta IP, por favor intente de nuevo depues de 15 minutos"
    }
});

export default limiter;