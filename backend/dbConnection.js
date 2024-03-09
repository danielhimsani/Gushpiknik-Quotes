const {MongoClient} = require('mongodb');



const URI = "mongodb://localhost:27017/local"

class MongoConnection {
    constructor(uri) {
        if (!MongoConnection.instance) {
            this.url = URI; // Change this URL according to your MongoDB server
            MongoConnection.instance = this;
        }
        return MongoConnection.instance;
    }

    async connect(dbName) {
        let client  = null;
        try {
            client = await MongoClient.connect(this.url, {useNewUrlParser: true, useUnifiedTopology: true});
            console.log('MongoDB connected');
        } catch (err) {
            console.error('Error connecting to MongoDB:', err);
            throw err;
        }
        return client.db(dbName);
    }

    async close() {
        if (this.client) {
            await this.client.close();
            console.log('MongoDB connection closed');
            this.client = null;
        }
    }
}

module.exports = new MongoConnection();
