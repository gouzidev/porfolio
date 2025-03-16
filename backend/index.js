const mongoose = require("mongoose")
const express = require("express")
const nodemon = require("nodemon")
const cors = require("cors")
const dotenv = require("dotenv").config().parsed

const Contact = require("./Contact")
const requestIp = require("request-ip")
const validator =  require("validator")




const connectToDB = async () => 
{
    try
    {
        console.log("Connecting to MongoDB ...")
        await mongoose.connect(dotenv.URI, {dbName : "portfolio"})
        console.log("Connected to MongoDB Atlas successfully")
    }
    catch (err)
    {
        console.error("MongoDB connection error:", err)
        process.exit(1)
    }
}

let app = express()


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200 || 204 
  }));

connectToDB()

app.post("/contact", async (req, res) => {
    let data = req.body
    let ip = req.ip
    
    if (!data || data == undefined)
        return res.json({"success": false, "msg": "you're data is not quite good"}) 
    let {name, email, message} = req.body
    
    if (name.trim() == "" || email.trim() == "" || message.trim() == "")
        return res.json({"success": false, "msg": "please fill in all the fields"}) 
    if (!validator.isEmail(email))
        return res.json({"success": false, "msg": "please enter a valid email"}) 
    try
    {
        const now = Date.now()
        let contact = new Contact({name: name, email:email, message:message, ip:ip, timestamp:now})
        let oldContact = await Contact.findOne({name: name, email: email}).sort({"timestamp":-1})
        if (oldContact)
        {
            const secondsPassed = (now - oldContact.timestamp) / 1000
            if (secondsPassed < 5)
                return res.json({"success": false, "msg": "please wait some time and try again"}) 
        }
        await contact.save()
        return res.status (200).json({ "success": true, "msg": "your message was sent successfully" })
    }  
    catch (err) 
    {
        console.log(err);
        return res.json({"success": false, "msg": "error saving data"}) 
    }
})

app.listen(dotenv.PORT, 
    () => console.log("server is up and running at -> " + dotenv.PORT)
);