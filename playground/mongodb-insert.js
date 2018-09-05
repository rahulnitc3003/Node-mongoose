const yargs = require('yargs');
const MongoClient = require('mongodb').MongoClient;

const command = yargs
    .option({
        t : {
            demand : true,
            alias : "text",
            string : true,
            describe : "Text of document",
        },
        c: {
            demand: true,
            alias : "collection",
            boolean : true,
            describe: "Collection true/false"
        }
    })
    .help()
    .alias('help', 'h')
    .argv;
// console.log(command.t);
// console.log(command.c);


/*--- Object destructute ---*/
// var user = {
//     name: "Rahul",
//     age: 24
// };
// var {name} = user;
// console.log("Name : ",name);
// const{MongoClient,ObjectID} = require('mongodb');
// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Database connection failed');
    }
    console.log('Connected to MongoDB server');
    
    /* --- insert document into Todos collection --- */
    db.collection('Todos').insertOne({
        //_id: 12345,
        text: command.t,
        completed: command.c
    },(err, result) => {
        if (err) {
            return console.log('Unable to insert Todos collection', err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    /* --- insert document into Users collection --- */
    db.collection('Users').insertOne({
        //_id: 123,
        name: "Rahul Raj",
        Address: "Bangalore",
        profession: "Developer"
    },(err, result) => {
        if (err) {
            return console.log('Unable to insert document', err);
        }
        console.log("ObjectId: ",result.ops[0]._id);
        console.log("Timestamp: ",result.ops[0]._id.getTimestamp());
        console.log(JSON.stringify(result.ops, undefined, 2));
        console.log('data sucessfully inserted');
    });
    
    db.close();
});