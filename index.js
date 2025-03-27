const express = require('express')
const mongoose = require('momgoose')

const app = express()

mongoose.connect('mongodb://localhost:27017/')