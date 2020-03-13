const express = require('express')
const helmet = require('helmet')
const server = express();

const projectsRoutes = require('./projectsRoutes')
const actionRoutes = require('./actionRoutes')

server.use(express.json())
server.use(helmet())
server.use('/projectsRoutes', projectsRoutes)
server.use('/actionRoutes', actionRoutes)
server.get('/', (req, res) => {
    res.send(`<h2>Server Runs...</h2>`)
});

module.exports = server;