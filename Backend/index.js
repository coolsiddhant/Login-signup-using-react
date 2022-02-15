const express = require('express');
const connectDB = require("./config/db.js");
const userRoutes = require('./routes/userRoutes.js');
const { notFound, errorHandler } = require('./middleware/error.js');
const cors = require('cors');
// const bodyParser = require('body-parser')

// const bodyParser = require('body-parser');

require('dotenv').config()

const corsOptions ={
    origin:'*',
    credentials:true,      
    optionSuccessStatus:200,
}

const app = express()
app.use(cors(corsOptions))
// app.use(bodyParser.json())

//connect DB
connectDB()

// middleware for req.body to parse 
app.use(express.json())

// middleware - access to any req-res cycle
app.use((req, res, next) => {
    console.log(req.originalUrl)
    next()
})

// routes
app.use('/api/users', userRoutes)

// fallback for 404 error (using after all routes)
app.use(notFound)

// express error middleware
// overloading default error handler as it sends HTML as response
app.use(errorHandler)

app.listen(5000, () => {
    console.log('App is listening on url http://localhost:5000')
});