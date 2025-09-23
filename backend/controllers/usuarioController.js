const usuarios = require("../models/usuariosModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

// registro de usuario
const registerUser = async (req, res) => {
    try {
        const { nombre, email, telefono, direccion, password } = req.body
        const rol = "cliente"

        // lanzamos error si no cuenta con todos los campos
        if(!nombre || !email || !telefono || !direccion || !password ) {
            return res.status(400).json({message: "Faltan campos obligatorios"}) 
        }

        // si ya esta registrado el email lanzamos error
        const findEmail = await usuarios.findOne({
            where: { email: email }
        })

        if(findEmail) {
            return res.status(400).json({message: "Email ya registrado, favor de iniciar sesion"})
        }

        // hasheamos la contraseña
        const salt = await bcrypt.genSalt(10)
        const hashedPass = await bcrypt.hash(password, salt)

        // hacemos el post del usuario
        const user = await usuarios.create({ nombre, email, telefono, direccion, password: hashedPass, rol })

        // extrameos la info del usuario despues del post
        const userData = await usuarios.findOne({
            where: { email: email }
        })

        // generamos el token 
        const token = jwt.sign({
            id: userData.idUsuario,
            email: userData.email,
            telefono: userData.telefono,
            direccion: userData.direccion
        }, process.env.JWT_TOKEN, {
            expiresIn: "1h"
        })

        const { password: _, ...userInfo } = userData.dataValues

        res.status(201).json({ token, userData: userInfo})
    } catch (error) {
        res.status(500).json({message: "Ocurrio un error al tratar de registrarse, error: ", error: error.message})
    }
}

// login de usuario
const login = async (req, res) => {
    try {
        const { email, password } = req.body
        // lanzamos error si no cuenta con todos los campos
        if(!email || !password ) {
            return res.status(400).json({message: "Faltan campos obligatorios"}) 
        }

        // buscamos el user
        const userData = await usuarios.findOne({
            where: { email: email.toLowerCase().trim() }
        })

        // lanzamos error si aun no esta registrado
        if(!userData) {
            return res.status(404).json({message: "Usuario aun no registrado, favor de registrarse"})
        }

        // verificamos la contraseña
        const comparePass = await bcrypt.compare(password, userData.password)

        if(!comparePass) {
            return res.status(400).json({message: "Credenciales invalidas"})
        }

        // generamos el token
        const token = jwt.sign({
            id: userData.idUsuario,
            email: userData.email,
            telefono: userData.telefono,
            direccion: userData.direccion
        }, process.env.JWT_TOKEN, {
            expiresIn: "1h"
        })

        const { password: _, ...userInfo } = userData.dataValues

        res.status(201).json({ token, user: userInfo})
    } catch (error) {
        res.status(500).json({message: "Ocurrio un error al tratar de hacer login, error: ", error: error.message})
    }
}

module.exports = {
    registerUser, 
    login
} 