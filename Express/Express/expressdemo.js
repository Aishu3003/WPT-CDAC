
const express = require("express")

var app = express()

const bodyparser = require("body-parser");

app.use(function (req, res, next) {
    console.log("This is a first middeware ")
    console.log("url" + req.url)
    next();

})
app.get("/Home", function (req, res) {
    res.sendFile('Home.html', { root: __dirname });
})

app.get('/About', function (req, res) {

    res.sendFile('About.html', { root: __dirname })
})

app.listen(9090, function () {
    console.log("listening to port 9090")
})