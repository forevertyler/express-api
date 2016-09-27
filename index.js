var express = require('express')
var app = express()

// app.get('/', function (req, res) {
//   var page = "<html>" +
//                 "<body>" +
//                   "<h1>INDEX.HTML</h1>" +
//                 "</body>" +
//               "</html>"
//   res.send(page)
// })
app.get('/:nameself', function (req, res) {
  var username = req.params.nameself;
  var about = "<html>" +
                "<body>" +
                  "<h1>"+
                   username+
                  "</h1>" +
                "</body>" +
              "</html>"
  res.send(about)
})
app.listen(3000,function(){
  console.log('running on port 3000.....');
})
