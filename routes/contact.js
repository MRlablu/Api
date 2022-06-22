const express = require('express')
const router = express.Router()


router.get('/',(req,res,next)=>{
      res.status(200).json({
        message:'hello, I am contact get Route'
      })
})

router.post('/',(req,res,next)=>{
  res.status(200).json({
    message:'hello, I am contact post Route'
  })
})

router.get('/:id',(req,res,next)=>{
  console.log(req.url)
  res.json({
    id:req.url
  })
})

module.exports= router