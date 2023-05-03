const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json)
app.use(cors())

const { getTasks, createTask  } = require('./controller.js')

app.get('/api/tasks', getTasks, createTask)
app.post('/api/tasks', getTasks, createTask)

app.listen(5478, () => console.log("Docked at port 5478"))

