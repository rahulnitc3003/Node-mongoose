/* --- run this file with node mongodb-find.js arg1 arg2 arg3 ... --yargsArg="Arg Name"	---*/

//const _ = require('lodash');
const yargs = require('yargs');

/* --- process object argument --- */
console.log('------------------');
console.log("Process Arguments");
console.log('------------------');
console.log(process.argv);

/* --- yargs npm module Object ---*/
console.log('------------------');
console.log("Yargs Object");
console.log('------------------');
console.log(yargs);

console.log('------------------------');
console.log("Yargs Arguments property");
console.log('------------------------');
const yargsArgv = yargs.argv;	// return _:[array of arguments]
console.log(yargsArgv);

console.log('------------------------');
console.log('List of passed Arguments');
console.log('------------------------');
yargsArgv._.forEach(element => {
	console.log(element);
});

// /*--- Using without loop --- */
// var arg1 = yargsArgv._[0];
// var arg2 = yargsArgv._[1];
// var arg3 = yargsArgv._[2];
// console.log(arg1,arg2,arg3);

/* ---	Display passing command hint options --- */
const yargsCommand = yargs
	.options({
		c: {
			demand : true,
			alias : 'collection',
			string : true,
			describe : 'collection for fetch from MongoDB database'
		},
		id: {
			demand : true,
			alias : 'ObjectId',
			string : true,
			describe : 'ObjectId for fetch from MongoDB database'
		}
	})
	.help()
	.alias('help','h')
	.argv;
console.log('---------------------------');
console.log('Yargs passed arguments list');
console.log('---------------------------');
console.log(yargsCommand.collection);
console.log(yargsCommand.ObjectId);