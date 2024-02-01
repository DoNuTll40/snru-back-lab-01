
require('dotenv').config();
const express = require("express")
const web = express();
const port = process.env.PORT;

const cors = require("cors");

const notFound = require('./src/middlewares/notFound');
const error = require('./src/middlewares/error');

web.use(express.json());
web.use(cors());

// services
web.use( "/auth", (req,res,next) => {
    res.send({ message : "in auth"})
} );

// notFound
web.use( notFound );

//error
web.use( error )

web.listen(port, () => {
    console.log("Server start port " + port)
})