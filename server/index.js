require('dotenv').config()
express = require('express')
session = require('express-session')
massive = require('massive')
const Controller = require('./Controller')
const {SERVER_PORT,CONNECTION_STRING,SESSION_SECRET} = process.env


app = express()

massive(CONNECTION_STRING).then(db => {
    app.set('db',db);
    console.log(db.listTables())
    console.log(`DATABASE: Connected`);
    app.listen(SERVER_PORT,()=>console.log('listening on Port',SERVER_PORT))
}).catch(err => console.log('err on db',err))
