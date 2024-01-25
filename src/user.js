const { PrismaClient } = require('@prisma/client')
const express = require('express')
const prisma = new PrismaClient()

const router = express.Router()

router.get('/user', (req, res) => {
    let user = prisma.user.findMany()
    // res.send("From user.js")

})

router.post("/Adduser", async (req, res) => {
    try {



        let name = req.body.name
        let Age = req.body.Age
        let role = req.body.Role
        console.log(role)
        let user = await prisma.user.create({

            data: {
                name: name,
                Age: Age,
                role: role
            }
        })
        res.send(user)
    } catch (error) {
        console.log(error)

    }
})

module.exports = router;