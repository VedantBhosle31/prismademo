const express = require('express')
const user = require('./user')
const app = express();
app.use(express.json())
app.use("/user", user)
app.get("/", (req, res) => {
    console.log(" You have use / path")
    res.send("Hello world")
})


app.listen(3000, () => {
    console.log("App started at http://localhost:3000")
})

