// import mongodb
import mongoose from "mongoose"; 
// import app
import app from "./api/router";

// import config
import env from "./config/index";

const http = require("http").createServer(app);
const io = require("socket.io")(http, {
  cors: { origin: "*" } 
});

io.on("connection", (socket: any) => {
  socket.on("join room", (message: any) => {
    console.log(message);
  });
});

// initialize
const port = env.port || 3000;

// set mongoose
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

// connect to mongo 
mongoose.connect(`${env.mongoURI}/gamesetmatch`, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("Successfully connected to mongoDB");
}).catch(e => {
    console.error(e);
})

// start server
http.listen(port, async () => {
    // tslint:disable-next-line:no-console
    console.log(`between-em API running on port ${port}`);
});
