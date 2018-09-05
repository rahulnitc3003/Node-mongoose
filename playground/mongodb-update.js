const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        console.log('Unable to connect MongoDB database');
    }
    console.log('Connected to MongoDB server');
    
    /* --- update record of Todos collection --- */
    db.collection('Todos').findOneAndUpdate({
        _id : new ObjectId('5b84dd9c2b90670db840d5d7')
    }, {
        $set: {
            completed: true,
            text : "New text updated"
        }
    }, {
        resultOriginal : false
    }).then((result) => {
        console.log(result); 
    }).catch((err) => {
        console.log('Unable to Update record into Todos', err);
    });

    /* --- update record of Users collection --- */
    db.collection('Users').findOneAndUpdate({
        _id : new ObjectId('5b85337f1edff23dc4248a85')
    },{
        $set :{
            name : 'Jhon Done',
            address : 'Otawa'
        },
        // $inc : {
        //     age : 1
        // }
    },{
        resultOriginal : false
    }).then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log('Unable to update record into Users collection',err);
    });
    
    db.close();
});