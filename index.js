var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello express')
})
app.get('/sss', function (req, res) {
  console.log('Hello sss');
  res.send('Hello sss')
})
app.listen(3000,function(){
  console.log('running on port 3000.....');
})
