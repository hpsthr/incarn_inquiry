const dotenv = require('dotenv')
dotenv.config();
const express = require("express")
const Form  = require("./DatabaseModal")
const path = require("path")

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {

    res.status(200).json({
            message: "incarn inquiry API v1 ",
            
        })
})

app.post("/incarn", async(req , res) => {
    
    await Form.create({
        name : req.body.data.name,
        email: req.body.data.email,
        phone:req.body.data.phone,
        message:req.body.data.message
    })
    res.status(200).json({
        status: 'success'})

})

app.get("/inquiry", async(req , res) => {

    const form = await Form.find().sort("-date")
    
    res.status(200).render("inquiry", {
        forms:form
    })
})

app.delete("/delete/:id", async(req, res) => {
    const id = req.params.id
    const update = await Form.findByIdAndDelete(id)
    res.status(200).json({
        status:"success"
    })
})

const port = 9000


app.listen(port, () => {
    console.log("server started @ port " + port);
})