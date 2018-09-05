const yargs = require('yargs');
const MongoClient = require('mongodb').MongoClient;

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

/*  --- Database Connection --- */

//console.log(process.argv[2]);  // Select Collection Name
if (process.argv[2] === 'Todos') {
    const commandTodos = yargs
        .option({
            t : {
                demand : true,
                alias : 'text',
                string : true,
                describe : 'Text to be insert'
            },
            c : {
                demand : true,
                alias : 'completed',
                boolean : true,
                describe : 'Select true/false'
            }
        })
        .help()
        .alias('help','h')
        .argv;
        // console.log(commandTodos.t);
        // console.log(commandTodos.c);
    
    MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
        if (err) {
            return console.log('Database connection failed');
        }
        console.log('Connected to MongoDB server');
        
        /* --- insert document into Todos collection --- */
        db.collection(process.argv[2]).insertOne({
            //_id: 12345,
            text: commandTodos.t,
            completed: commandTodos.c
        },(err, result) => {
            if (err) {
                return console.log('Unable to insert Todos collection', err);
            }
            console.log(JSON.stringify(result.ops, undefined, 2));
            console.log('data sucessfully inserted');
        });
        db.close();
    });
}
else if (process.argv[2] === 'Users'){
    const commandUsers = yargs
        .option({
            n : {
                demand : true,
                alias : 'name',
                string : true,
                describe : 'Name of the developer'
            },
            a : {
                demand : true,
                alias : 'address',
                string : true,
                describe : 'Address to be insert'
            },
            p : {
                demand : true,
                alias : 'profession',
                string : true,
                describe : 'Profession to be insert'
            }
        })
        .help()
        .alias('help','h')
        .argv;
        // console.log(commandUsers.n);
        // console.log(commandUsers.a);
        // console.log(commandUsers.p);
    MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
        if (err) {
            return console.log('Database connection failed');
        }
        console.log('Connected to MongoDB server');

        /* --- insert document into Users collection --- */
        db.collection(process.argv[2]).insertOne({
            //_id: 123,
            name: commandUsers.n,
            Address: commandUsers.a,
            profession: commandUsers.p
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
}
else{
    console.log("Collection is not correct Please insert collection name is either 'Todos' or 'Users'");
}