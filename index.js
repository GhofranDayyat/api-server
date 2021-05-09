'use strict';
require('dotenv').config();
const MONGODB_URL=process.env.MONGODB_URL;
const PORT = process.env.PORT||4444;
const server = require('./src/server.js');
server.start(PORT,MONGODB_URL);
