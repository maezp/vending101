const express = require('express')
const connectDB = require('./db.js')
const itemModel = require('./models/item.js')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())

connectDB()

//fetch data from database
app.get('/', async (req,res)=>{
    const response = await itemModel.find()
    return res.json({device : response})
})

app.post("/create",(req, res) => {
    itemModel.create(req.body)
    .then(devices => res.json(devices))
    .catch(err => res.json(err))
})

app.listen(3000, ()=>{
console.log("Server pokrenut na portu 3000.");
})