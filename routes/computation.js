
var express = require('express');
var router = express.Router();
var x = Math.random();
var y = Math.random();
var val1="Math.atan(base) applied to "+ x + " is "+ Math.atan(x)
var val2="Math.exp(base,exponent) applied to "+ x +"and"+ y +" is "+ Math.exp(x,y)
var val3= "Math.expm1(base) applied to "+ x + " is "+ Math.expm1(x);
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('computation', { title:'VENKATA KEERTHI KAMANI ',value1: val1, value2:vasl2, value3:val3 });
});
module.exports = router;

