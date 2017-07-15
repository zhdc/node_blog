var express = require('express');
var router = express.Router();

router.get('/home', function(req, res,next) {
	var mongoose = require('mongoose');

	var uri = 'mongodb://localhost/zh_robot';
	global.db = mongoose.createConnection(uri);
	var Schema = mongoose.Schema;
	var mySchema = Schema({username: String,email:String});

	/* global db */
	var save_user = db.model("users",mySchema);
	new save_user({
		username:"朱德朝",
		email:"995949180@qq.com"

	}).save();
	var user_model = db.model('users', mySchema);
	user_model.find(function(err, docs) {
	    if (err) return next(err);
   	    res.send(docs);
  	});
});
router.get("/list",function(req,res){
	res.send("is me list");
});

module.exports = router;
