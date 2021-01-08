import express from "express";
import bodyParser from "body-parser"

// import routes


// create server
const app = express();

// setup app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

// add routes to app

// export app
export default app;
