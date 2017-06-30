var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.send('hello, express');
});
router.get("/list",function(req,res){
	res.send("is me list");
});

module.exports = router;
