const mongoose = require('mongoose');

/* --- User Document module with validation --- */
var User = mongoose.model('UserDash', {
    name : {
        type : String,
        required : true,
        minlength : 1,
        trim : true
    },
    completed : {
        type: Boolean,
        default : false
    },
    completedAt: {
        type : Number,
        default : null
    }
});

// /* --- insert user User document --- */
// var user1 = new User({
//     name : "Drive a Car"
// });

// user1.save().then( (doc) => {
//     console.log(JSON.stringify(doc, undefined, 2));
// }, (err) => {
//     console.log("Unable to save user1 document", err);
// });


/* --- User Authentication Module --- */
// const userLogin = mongoose.model('User', {
//     email : {
//         type : String,
//         required : true,
//         trim : true,
//         minlength : 1
//     },
//     password : {
//         type : String,
//         required : true,
//         minlength : 4
//     }
// });

// var user = new userLogin({
//     email: "rjrahulabc30@gmail.com",
//     password : "R1234"
// });
// user.save().then( (doc) => {
//     console.log(JSON.stringify(doc ,undefined, 2));
// }, (err) => {
//     console.log(`Unable to save user document ${err}`);
// });

module.exports = {User};