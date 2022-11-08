const router = require("express").router();
const { User } = require("../models/user")
const joi = require("joi")
const bcrypt = require("bcrypt")

router.post("/", async (req, res) => {
    try {
        const { error } = validate(req.body)
        if (error)
            return res.status(400).send({ message: error.details[0].message })
        if (!user)
            return res.status(401).send({ message: "Invalid Email or Password" })
        
        const validPassword = await bcrypt.compare(
            req.body.password, user.password
        ) 
        if (!validPassword)
            return res.status(401).send({ message: "Invalid Email or Password" })
        
        const token = user.generateAuthToken()
        res.status(200).send({ data: token, message: "Logged in successfully" })
        
    } catch (error){
        res.status(500).send({message: "Internal server error"})
    }
})

const validate = (data) => {
    const schema = joi.object({
        email: joi.string().email().required().label("Email"),
        password: joi.string().email().required().label("Passsword")
    })
    return schema.validate(data)
}