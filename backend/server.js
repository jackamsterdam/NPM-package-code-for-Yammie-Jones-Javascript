#!/usr/bin/env node
const dotenv = require('dotenv') 
dotenv.config()
const config = require('./01-utils/config') 

const express = require('express')
const expressRateLimit = require('express-rate-limit')
const cors = require('cors')
const errorsHandler = require('./02-middleware/errors-handler') 
const logRequests = require('./02-middleware/log-request')
const sanitize = require('./02-middleware/sanitize')
const ErrorModel = require('./03-models/error-model')
const ordersController = require('./06-controllers/orders-controller')


const splashScreen = require("../cli/splash-screen");

function run() {

const server = express() 


    server.use(cors({origin: ['http://localhost:3000', 'http://localhost:4200']})) //connect to angular or react project

server.use('/',expressRateLimit({windowMs: 1000, max: 10, message: 'Rate exceeded. Please try again soon'}))


server.use(express.json())
server.use(sanitize)
server.use(logRequests)


server.use('/api', ordersController)

server.use('*', (request, response, next) => {
        next(new ErrorModel(404, 'Route not found'))
})

server.use(errorsHandler)


// server.listen(process.env.PORT, splashScreen)
server.listen(3001, splashScreen)
}

module.exports = {run}