const express = require('express')
const bodyParser = require('body-parser') //middleware

const userRoute = require('./routes/userRoute')

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({extended: false}))
//faz a transformação do dado do post em objeto

userRoute(app)


app.get('/', (req,res) => res.send('Olá mundo pelo express'))

app.listen(port, () => console.log('Api rodando na porta 3000'))