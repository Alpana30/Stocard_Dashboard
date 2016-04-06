var express = require('express');
var app = express();
var router = express.Router();

app.use('/public', express.static('./public'));
app.use('/node_modules', express.static('./node_modules'));

router.get('/dashboard', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.use('/stocard', router);

app.listen(3000, function () {
  console.log('Stocard Dashboard running on http://localhost:' + 3000 + '/stocard/dashboard');
});
