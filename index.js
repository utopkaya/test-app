const express = require("express")

const app = express()
const host = "localhost"
const port = process.env.PORT || 5000

app.get("/", (req,res) => {
    res.send("server is online!")
})

app.listen(port, () => {
    console.log(`server is online => http://${host}:${port}`);
})

