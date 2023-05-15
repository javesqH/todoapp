const express = require('express');
const req = require('express/lib/request');

const app = express();

const todoRouter = require('./todos/todos.routers')

app.use(express.json())

app.get("/", (req, res) => {
    res.status(200).json({ message: "Server OK!"});
})

app.use("/", todoRouter)

app.listen(9000, () => {
    console.log('Servidor corriendo en el puerto 9000');
});
