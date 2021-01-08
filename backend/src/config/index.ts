import dotenv from "dotenv";

// get env variables from env
dotenv.config();


interface Env {
    port: string,
    mongoURI: string,

}

// common env
let env: Env = {
    port: process.env.PORT,
    mongoURI: "mongodb://localhost:27017",
}

// test for environment
if (process.env.NODE_ENV === "qa") {
    env = {
        ...env,
    }
} else if (process.env.NODE_ENV === "prod") {
    env = {
        ...env,

    }
} else if (process.env.NODE_ENV === "pipeline") {
    env = {
        ...env,
        mongoURI: "mongodb://mongo:27017",
    }
}

export default env;

