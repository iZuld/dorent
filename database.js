/*const bodyParser = require('body-parser');


var mongoose = require ('mongoose');
var userSchema= new mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim:true,
    },
    rentalname:{
        type: String,
        required:true,
        trim:true
    },
    password:{
        type:String,
        required:true
    }
});

var rentaldb = mongoose.model('rental', userSchema);
//var user = mongoose.model('user', userSchema);
module.exports = rentaldb;
//module.exports = user;

if(req.bodyParser.email &&
    req.bodyParser.rentalname &&
    req.bodyParser.password){

        var userRental = {
            email:req.bodyParser.email,
            rentalname : req.bodyParser.rentalname,
            password : req.bodyParser.password
        }

        rentaldb.create(userRental,function(err, user){
            if (err) {
                return next(err)
            } else{
                return res.redirect('/');
            }
        })
    }
*/