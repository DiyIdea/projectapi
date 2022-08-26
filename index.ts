import express from "express"
import cors from 'cors'
import mysql from './src/modules/mysql'

const app = express()
const PORT = 3714

app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

app.get('/', async (req, res) => {
    const connection = await mysql.connect()
    connection.execute('SELECT * FROM users;', [])

    res.send("Get request to the homepage")
})

app.post('/', (req, res) => {
    const request = req.body
    const result = request.one + request.two

//
    const response = { "result":result}
    res.send(response)
})

app.listen(PORT, ()=>{
    console.log("Example app listiening at http://localhost: 3714")
})