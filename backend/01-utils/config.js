#!/usr/bin/env node
class Config {

}


//! Enter your own database if you you git cloned my repository!!!!



class DevelopmentConfig extends Config {
    isDevelopment = true 
    logFile = 'logger.log'
    mysql =  'ENTER YOUR CONGIF VARS HERE'
}

class ProductionConfig extends Config {
    isDevelopment =  false
    logFile = 'logger.log'
    // mysql = {host: 'localhost', user: 'root', password: '', database: 'yammieDB'}
    mysql = 'ENTER YOUR CONGIF VARS HERE'
}

const config = process.env.NODE_ENV === 'production' ? new ProductionConfig() : new DevelopmentConfig()


module.exports = config 