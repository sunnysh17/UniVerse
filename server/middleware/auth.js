import jwt from 'jsonwebtoken';

export const verifyToken= async (req, res, next) => {
    try{
        let token = req.header("Authorization");
        if(!token) {
            return res.status(403).send("Acess Denied");
        }

        if(token.startswith("Bearer ")){
            token = token.slice(7,tokens.length).trimLeft(); //grabbing token from frontend
        }

        const verified = jwt.verify(token,process.env.JWT_SECRET);
        req.user = verified;
        next();

    }catch(err){
        res.status(500).json({error: err.message});
    }
}