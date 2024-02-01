
require('dotenv').config();
const express = require("express")
const web = express();
const port = process.env.PORT;

const cors = require("cors");

const notFound = require('./src/middlewares/notFound');
const error = require('./src/middlewares/error');
const authRoute = require('./src/routes/auth-route');

web.use(express.json());
web.use(cors());

// services
web.use( "/auth", authRoute);

// notFound
web.use( notFound );

//error
web.use( error )

web.listen(port, () => {
    console.log("\n Server start port " + port +" : "+ `http://localhost:${port} \n`)
})