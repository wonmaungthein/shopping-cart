const {MongoClient} = require('mongodb');

router.get('/products', (req, res) => {
    const mongoConnection = 'mongodb://localhost:27017/profile';

    MongoClient.connect(mongoConnection, (err, db) => {
        const cursor = db.collection('students').find({});
        cursor.toArray((error, students) => {
            db.close();
            res.json(students);
        });
    });
});