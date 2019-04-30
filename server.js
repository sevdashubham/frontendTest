console.log("Application starting...");
var express = require('express');

var app = express();

app.set('views','./views');
app.set('view engine','pug');

app.use(express.static('./public'));
app.use(require('./routers/index'));

app.listen(process.env.PORT || 3000, function functionName() {
  console.log("Listening...");
})
