var express = require('express');
var app = express();
var router = express.Router();

app.use('/public', express.static('./public'));
app.use('/node_modules', express.static('./node_modules'));

router.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.use('/stocard-dashboard', router);

app.listen(3000, function () {
  console.log('Stocard Dashboard listening on http://localhost:' + 3000 + '/stocard-dashboard');
});
