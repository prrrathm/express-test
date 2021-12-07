const { response } = require('express')
const express = require('express')
const { readFile } = require('fs').promises
// const { readFile } = require('fs')

const app = express()

// WITHOUT PROMISES
// app.get('/', (request,response)=>{
//     readFile('./home.html','utf8',(err,html)=>{
//         if(err){
//             response.status(500).send('sorry server error')
//         }
//         response.send(html);
//     })
// })

// WITH PROMISES
app.get('/', async (request, response)=>{
    response.send(await readFile('./home.html','utf8'))
})

app.listen(3000, ()=>console.log('App at http://localhost:3000'))