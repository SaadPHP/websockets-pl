
var express = require('express');
var socket = require('socket.io');

var app = express();

// App setup
var server = app.listen(4001,() => {
    console.log("listening to requests on port 4001");
});

// Static files
app.use(express.static('public'));

// Socket Setup
var io = socket(server);
io.on('connection', async (socket) => {
    console.log('socket connection made successfully', socket.id);
    
    socket.on('chatBox', function(data){
        io.sockets.emit('chatBox',data);
    });
});

