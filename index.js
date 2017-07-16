var express = require("express");
var session = require("express-session");
var bodyParser = require('body-parser');
var path = require("path");
var node_route_ctl = require("./controller/node_route.js");
var admin_login_ctl = require("./controller/admin_login.js");
var app = express();

app.set("port",process.env.PORT || 80);

app.use(session({
	secret:"zhudechao",//建议使用随机字符串
	cookie:{maxAge:1000*60*10},//过期时间（毫秒）
	resave: true,
	saveUninitialized: false
}));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'assets')));
app.use("/",node_route_ctl);
app.use("/admin",admin_login_ctl);
//404页面
app.use(function(req,res){
	res.type("text/plain");
	res.status(404);
	res.send("404 - Not Found");
});

app.listen(app.get("port"),function(){
	console.log("监听端口"+app.get("port"));
});
