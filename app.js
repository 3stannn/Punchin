// const http = require("http");

// const server = http.createServer(function (req, res) {
//     res.end("This is a working server.")
// })

var port = 3000;

// server.listen(port, () => {
//     console.log(`running http://localhost:${port}`)
// }) 

const express = require('express');
const app = express();

const fs = require("fs");
const { setTimeout } = require('timers/promises');

console.log("1. start file reading");

fs.readFile('text.txt', 'utf8', (err, data) => {
    if (err) throw err;
    app.get('/', (req, res) => res.send(`${data}`));
    console.log("3. done reading file.")
})

console.log("2. reading file...")

app.listen(port, () => {
    console.log(`running http://localhost:${port}`)
});