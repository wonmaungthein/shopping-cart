const {MongoClient} = require ('mongodb');
const mongoConnection = process.env.MONGODB_URI || 'mongodb://localhost:27017/shopcentre';

const singleproduct = (query, sucessCallBack) => {
    MongoClient.connect(mongoConnection, (error, db) => {
        const cursor = db.collection('Products[]').find(query);
        cursor.toArray((error, Products) => {
            db.close();
            sucessCallBack(error, Products)
        });
    });
}

module.exports = {
    singleproduct
};