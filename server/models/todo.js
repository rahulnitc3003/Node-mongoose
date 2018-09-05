const mongoose = require('mongoose');

/* --- Todo Document Module without validation ---*/
var Todo = mongoose.model('Todo', {
    text : {
        type : String
    },
    completed : {
        type : Boolean
    },
    completedAt : {
        type : Number
    }
});

// /*--- insert first Todo document ---*/
// var newTodo = new Todo({
//     text : "Cook Dinner"
// });

// newTodo.save().then( (doc) => {
//     console.log('Saved todo', doc);
// }, (err) => {
//     console.log('Unable to save todo');
// });

// /* --- insert second Todo document ---*/
// var otherTodo = new Todo({
//     text : "Write a code",
//     completed : true,
//     completedAt : 123
// });

// otherTodo.save().then( (doc) => {
//     console.log(JSON.stringify(doc, undefined , 2));
// },( (err) => {
//     console.log('Unable to Save otherTodo', err);
// }));


module.exports = {Todo};