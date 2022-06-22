const express = require('express')
const morgan = require('morgan')
const bodyparser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://admin:admin44@cluster0.8s2z6tc.mongodb.net/test')

const db = mongoose.connection
db.on('error',(err)=>{
    console.log(err);
})

db.once('open',()=>{
    console.log('Database connection Establish');
})
const contactRoute = require('./routes/contact')

const Schema = mongoose.Schema
const DemoSchema = new Schema({
    name:{
        type: String,
        required : true,
        minlength:3
    },
    phone:{
        type: String,
        require:true
    }
})

const Demo = mongoose.model('Demo',DemoSchema)

const app= express()
app.use(morgan('dev'))
app.use(cors())

app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())

app.use('/api/contacts',contactRoute)

app.get('/demo',(req,res)=>{
    const demo = new Demo({
        name:'Durjoy',
        phone:'01792761075'
    })
    demo.save()
    .then(data=>{
        res.json({data})
    })
    .catch(err=>console.log(err))
})

app.get('/get',(req,res)=>{
    Demo.find()
    .then(data=>{
        res.json(data)
    })
    .catch(err=> console.log(err))
})

app.get('/',(req,res)=>{
    res.send('This is frst Route')
})

app.get('/api/contacts',(req,res)=>{
    res.json(contacts)
})

app.post('/api/contacts/p',(req,res)=>{
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