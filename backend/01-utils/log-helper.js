#!/usr/bin/env node
const {createLogger, transports, format} = require('winston') 
const config = require('./config') 

const logger = createLogger({
    level: 'info',
    transports: [
        // new transports.Console(),
        new transports.File({filename: config.logFile})
    ],
    format: format.combine(
        format.timestamp({format: 'YYYY-MM-DD hh:mm:ss'}),
        format.printf(log => `${log.level}\t${log.timestamp}\t${log.message}`)
    )
})

module.exports = logger 