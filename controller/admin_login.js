var express = require('express');
var router = express.Router();

router.post("/login",function(req,res){
	var user_name = req.body.user_name;
	var password = req.body.password;
	console.log(user_name+"--"+password);
	res.type('application/json');
    res.jsonp({code:1});
	/*
	req.session.sign = true;
	console.log(req.session.sign);
	res.send("admin login");
	*/
});

router.get("/success",function(req,res){
	if(req.session.sign){
		res.send("登录成功");
	}else{
		res.send("session 过期");
	}
});

router.post("/save",function(req,res){
	console.log(req.body.username);
	res.type('application/json');
    res.jsonp({a:"abcd"});
});

module.exports = router;
