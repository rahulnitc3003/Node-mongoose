// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectId} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
    if (err) {
        console.log("Unable to connect MongoDB database", err);
    }
    else{
        console.log('Connected to MongoDB Server');
    }
    
    db.collection('Todos').find().toArray().then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
    }).catch((err) => {
        console.log('Unable to fetch records',err);
    });

    // db.collection('Todos').find({_id : new ObjectId('5b788423ecc4234d34f00f69')}).toArray().then((result) => {
    //     console.log(JSON.stringify(result, undefined, 2));
    // }).catch((err) => {
    //     console.log('Unable to fetch records',err);
    // });
    
    db.collection('Todos').find().count().then((count) => {
        console.log(`Total no. of records in Todos collection: ${count}`);
    }).catch((err) => {
        console.log('Unable to fetch record from Todos collection', err);
    });

    db.collection('Todos').find().toArray().then( (result) => {
        result.forEach(id => {
            console.log(`Id: ${id._id}`);    
        });
        
    }).catch((err) => {
        console.log('Unable to fetch records', err);
    });
    db.close();
});