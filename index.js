
var express = require('express');
var app = express();

// App setup
var server = app.listen(4001,() => {
    console.log("listening to requests on port 4001");
});

// Static files
app.use(express.static('public'));