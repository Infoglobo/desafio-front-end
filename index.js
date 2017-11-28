var express = require('express');
var app = express();

app.use('/', express.static('htdocs'));
app.use('/node_modules', express.static('node_modules'))

app.listen(3000, function() {
	console.log('listen on http://localhost:3000');
});
