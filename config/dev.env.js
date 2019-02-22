'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')
module.exports = merge(prodEnv, {
    NODE_ENV: '"development"',
    API_HOST: '"http://192.168.1.31:5000/api/"'
    // API_HOST: config.url
})
