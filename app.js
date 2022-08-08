const express = require("express")
const path = require('path')
const app = express()
const port = process.env.PORT || 8000

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.static("public"))
app.get('/', function(req,res){
    res.render('homePage')
})

app.listen(port, function() {
    console.log("server started on port 8000")
})