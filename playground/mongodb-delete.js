const yargs = require('yargs');
const MogoClient = require('mongodb');

const yargsArgvs = yargs.argv;
const command = yargs
    .options({
        t: {
            demand : true,
            alias : 'text',
            string : true,
            describe : 'Text for delete record'
        }
    })
    .help()
    .alias('help','h')
    .argv;
    //console.log(command.t);
    var text = command.t;

    MogoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        console.log('Unable to connect MongoDB database');
    }
    else{
        console.log('Connected to MongoDB Server');
    }

    /* --- deleteMany records --- */
    db.collection('Todos').deleteMany({text : text}).then((result) => {
        console.log(result);
        if (JSON.parse(result).n) {
            console.log(`Total ${JSON.parse(result).n} Records deleted`);
        }
        else{
            console.log('Text value is not found into database');
        }
        
    }).catch((err) => {
        console.log(`Unable to execute query${err}`);
    });

    /* --- deleteOne Record --- */
    // db.collection('Todos').deleteOne({text : text}).then((result) => {
    //     if (JSON.parse(result).n) {
    //         console.log('Record sucessfully deleted');
    //     }
    //     else{
    //         console.log('Text value not found in database');
    //     }    
    // }).catch((err) => {
    //     console.log('Unable to execute query');
    // });

    /* --- findOneAndDelete document ---*/
    // db.collection('Todos').findOneAndDelete({text : text}).then((result) => {
    //     if (result.lastErrorObject.n) {
    //         console.log(result);
    //         console.log('Record sucessfully deleted');
    //     }
    //     else{
    //         console.log('Text value is found into database');
    //     }
    // }).catch((err) => {
    //     console.log(`Unable to execute query ${err}`);
    // });

    db.close();
});