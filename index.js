'use strict';
require('dotenv').config();
const MONGODB_URL=process.env.MONGODB_URL||'mongodb+srv://admin:aaaa@api0server.afeds.mongodb.net/test';
const PORT = process.env.PORT||4444;
const server = require('./src/server.js');
server.start(PORT,MONGODB_URL);
