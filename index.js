const express = require('express')
const morgan = require('morgan')
const bodyparser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://admin:admin44@cluster0.8s2z6tc.mongodb.net/test')


const contactRoute = require('./routes/contact')

const app= express()
app.use(morgan('dev'))
app.use(cors())

app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())

app.use('/api/contacts',contactRoute)

app.get('/',(req,res)=>{
    res.send('This is frst Route')
})

app.get('/api/contacts',(req,res)=>{
    res.json(contacts)
})

app.post('/api/contacts',(req,res)=>{
    res.json({
        message:'I am post method'
    })
})

const contacts=[
    {name:'HR media', email:'some34@gamil.com'},
    {name:'pk media', email:'pakisthan34@gmail.com'}
]


const PORT = process.env.PORT || 9000
app.listen(PORT,()=>{
    console.log(`SURVER IS RUNNING ON PORT ${PORT}`)
})