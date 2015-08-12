#!/usr/bin/env node

var spawn = require('child_process').spawn
var path = require('path')

var argv = require('minimist')(process.argv.slice(2))
var dotenv = require('dotenv')

dotenv.load({path: path.resolve(argv.e || '.env')})

spawn(argv._[0], argv._.slice(1), {stdio: 'inherit'})
