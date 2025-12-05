const jwt = require('jsonwebtoken');
require('dotenv').config();

const validarToken = (req,res,next)=>{
  const authHeader = req.headers.authorization;
  if(!authHeader) return res.status(401).json({msg:'Token requerido'});
  const [type, token] = authHeader.split(' ');
  if(type!=='Bearer' || !token) return res.status(401).json({msg:'Token inválido'});
  try{
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  }catch(e){
    return res.status(401).json({msg:'Token expirado o inválido'});
  }
};
module.exports = { validarToken };
