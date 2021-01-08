import express from "express";
import bodyParser from "body-parser"

// import routes
import gameRouter from "./game/game.routes";


// create server
const app = express();

// setup app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

// add routes to app
app.use("/api/game", gameRouter);

// export app
export default app;
