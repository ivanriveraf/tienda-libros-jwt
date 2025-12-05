const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Usuario = require('../models/Usuario');

exports.registrar = async (req,res)=>{
  try{
    const {username,password} = req.body;
    const existe = await Usuario.findOne({where:{username}});
    if(existe) return res.status(400).json({msg:'Usuario ya existe'});
    const hash = await bcrypt.hash(password,10);
    const nuevo = await Usuario.create({username,passwordHash:hash});
    res.json({msg:'Registrado',usuario:{id:nuevo.id,username}});
  }catch(e){ res.status(500).json({msg:'Error servidor'}); }
};

exports.login = async (req,res)=>{
  try{
    const {username,password} = req.body;
    const user = await Usuario.findOne({where:{username}});
    if(!user) return res.status(400).json({msg:'Credenciales inválidas'});
    const ok = await bcrypt.compare(password,user.passwordHash);
    if(!ok) return res.status(400).json({msg:'Credenciales inválidas'});
    const token = jwt.sign({id:user.id,username},process.env.JWT_SECRET,{expiresIn:'1h'});
    res.json({msg:'Login correcto',token});
  }catch(e){ res.status(500).json({msg:'Error servidor'}); }
};
