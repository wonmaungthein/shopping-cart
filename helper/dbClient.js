const { MongoClient } = require('mongodb');

const mongoConnection = process.env.MONGODB_URI ||'mongodb://shopcentre:@products-shard-00-00-k8pvi.mongodb.net:27017,products-shard-00-01-k8pvi.mongodb.net:27017,products-shard-00-02-k8pvi.mongodb.net:27017/admin?replicaSet=products-shard-0&ssl=true'
const getproducts = (query, sucessCallBack) => {
    MongoClient.connect(mongoConnection, (error, db) => {
        const cursor = db.collection("products").find(query);
        cursor.toArray((error, products) => {
            db.close();
            sucessCallBack(error, products)
        });
    });
}

module.exports = {
    getproducts
};


