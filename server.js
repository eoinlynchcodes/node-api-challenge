const express = require('express')
const helmet = require('helmet')
const server = express();

const projectsRoutes = require('./projectsRoutes')

server.use(express.json())
server.use(helmet())
server.use('/projectsRoutes', projectsRoutes)

server.get('/', (req, res) => {
    res.send(`<h2>Server Runs...</h2>`)
});

module.exports = server;