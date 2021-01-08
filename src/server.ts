// import mongodb
import mongoose from "mongoose";

// import app
import app from "./api/router";

// import config
import env from "./config/index";

// initialize
const port = env.port || 5000;

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
app.listen(port, async () => {
    // tslint:disable-next-line:no-console
    console.log(`between-em API running on port ${port}`);
})
