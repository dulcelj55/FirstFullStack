

const express = require('express')
const PORT = 3000;
const app = express ()
const path = require('path')


app.use(express.static(path.join(__dirname, "dist")))

app.get( "/", (req, res) => {
    res.send("hello")
})
console.log("hello");

app.listen(PORT, () =>{
    console.log(`listening on port ${PORT}`)
})