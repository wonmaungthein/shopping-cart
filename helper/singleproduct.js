
const singleproduct = (query, sucessCallBack) => {
    MongoClient.connect(mongoConnection, (error, db) => {
        const cursor = db.collection('Products').find(query);
        cursor.toArray((error, Products) => {
            db.close();
            sucessCallBack(error, Products)
        });
    });
}

module.exports = {
    singleproduct
};