// const express =require('express')
import express from 'express'
import appRoutes from './routes/index.js'
const app =express()
const PORT =8000
// app.get('/',(req,res)=>{
//     res.status(200).send({messsage1:"Hello World",
//     message2:"i am practising second time backend",
//     message3:"Thank you"
// })
// })
// app.get('/html',(req,res)=>{
//     res.status(200).send(`<h1>welcome</h1>
//     <h5> i am doing html request for in recalling day2<h5>
//     <p>*********Thank you******</p>`)
// })


// startin with type newverxion //
app.use(appRoutes)
app.listen(PORT,()=>console.log(`app is listening ${PORT}`))