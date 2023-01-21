const User = require("../models/user")
const {validationResult} = require('express-validator')
exports.index = (req, res, next) => {
    //res.send('Hello World');
    res.status(200).json({
      fullame: 'Channawat',
     })
  }

exports.bio = (req, res, next) => {
    //res.send('Hello World');
    res.status(200).json({
      fullame: 'Channawat',
      nickname: 'Keng',
      hobby: 'ROeveryday',
      gitusername: 'Channawatjwrld'
     })
  }

exports.company =(req, res, next) =>{
    res.status(200).json({
        data: [{
            id: 1,
            name: "CODING HUB",
            address: {
              province: "Bangkok",
              postcode: "10310"
            }
      
        },
        {
        id: 2,
        name:"Microsoft (Thailand)",
        address: {
            province: "Bangkok",
            postcode: "10330"
        }
        },
        {
            id: 3,
            name: "GRAVITY GAME TECH",
            address: {
                province: "Bangkok",
                postcode: "10500"
            }
        }]
    })
}

exports.register = async(req,res,next) =>{
    try{
        const {name, email, password} = req.body

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const error = new Error("Invalid Email")
            error.statusCode = 422;
            error.validation = errors.array()
            throw error;
        }
        let user = new User()
        user.name = name
        user.email = email
        user.password = await user.encryptPassword(password)
        const existEmail = await User.findOne({email:email})
    
        if(existEmail){
            const error = new Error("Email นี้มีผู้ใช้งานแล้ว")
            error.statusCode = 400
            throw error;
        }
        await user.save()
    
        res.status(200).json({
            message:"Hello Register"
        })
    }
    catch(error){
        next(error)
    }
}

