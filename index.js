var express = require("express");
var path = require("path");
var app = express();

app.set("port",process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, 'assets')));
//404页面
app.use(function(req,res){
	res.type("text/plain");
	res.status(404);
	res.send("404 - Not Found");
});

app.listen(app.get("port"),function(){
	console.log("监听端口"+app.get("port"));
});
