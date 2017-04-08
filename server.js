var express = require('express')
var app = express()

app.get('/*', function (req, res) {
  var result = {}
  var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress
  result.ipaddress = ip
  result.language = req.headers['accept-language'].split(',')[0]
  result.software = req.headers['user-agent'].match(/\(([^\)]+)\)/)[1]

  res.send(result)
})

var port = process.env.PORT || 8080
app.listen(port, function () {
  console.log('Server listening on port ' + port + '!')
})