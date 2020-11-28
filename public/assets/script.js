
// Making Connection
var socket = io.connect('http://localhost:4001');

// sending message to server : function
sendMessage = function(){

    var message = document.getElementById('message');
    var name = document.getElementById('username');
    var currentDate = new Date().toLocaleString();

    socket.emit('chatBox',{
        message: message.value,
        name: name.value,
        date: currentDate
    });

    $('#username').prop('disabled',true);
    $('#message').val('').focus();
};

// Listen reponse from server
socket.on('chatBox', function(data){

    var output = document.getElementById('output');

    //console.log(data);
    output.innerHTML += '<span><strong>' + data.name + ': </strong>' + data.message + '</span><b>Sent on : ' + data.date + '</b>';
});