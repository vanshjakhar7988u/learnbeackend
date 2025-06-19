require('dotenv').config()


const express = require('express')//same like import express

const app = express() //app is like MATH so we can use all functionalities
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send('hiteshdotcom')

})
app.get('/login',(req,res)=>{
    res.send('<h1>LOGIN HERE</h1>')

})
app.get('/youtube',(req,res)=>{
    res.send('<h2>jai ho chai</h2>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
