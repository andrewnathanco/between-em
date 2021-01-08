// import mongoose
import mongoose from "mongoose";

// import env
import env from "../config/index";


// setup function
export const setup = (databaseName: string) => {
    beforeAll(async () => {
        mongoose.set('useNewUrlParser', true);
        mongoose.set('useFindAndModify', false);
        mongoose.set('useCreateIndex', true);
        const url = `${env.mongoURI}/${databaseName}-test`;
        await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    });
}

async function removeAllCollections() {
    const collections = Object.keys(mongoose.connection.collections)
    for (const collectionName of collections) {
        const collection: mongoose.Collection = mongoose.connection.collections[collectionName]
        await (await collection.deleteMany({})).result;
    }
}


export const teardown = () => {
    afterEach(async () => {
        await removeAllCollections();
    });
    afterAll(async () => {
        await mongoose.connection.close();
    })
}