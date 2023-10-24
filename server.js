const express = require('express')
const morgan = require('morgan')
const bodyParser = require("body-parser");
const routerTodo = require('./routes/todo.route')
const sequelize = require('./config/db_connect')
require('dotenv').config()

const app = new express()
app.use(express.json());
app.use(morgan("tiny"));
app.use('/todo', routerTodo)

app.listen(process.env.PORT, () => {
  console.log(`Running on http://localhost:${process.env.PORT}`)
})