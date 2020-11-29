
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

typingName = function(){
    
    var typer = document.getElementById('username');
    socket.emit('type',typer.value);
};

// Listen response from server
socket.on('chatBox', function(data){
    $('#broadcast').text("");
    var output = document.getElementById('output');

    //console.log(data);
    output.innerHTML += '<span><strong><i>&#xf007;</i> ' + data.name + ': </strong>' + data.message + '</span><b><i>&#xf017;</i> Sent on : ' + data.date + '</b>';
});

socket.on('type', function(data){

    var bdcast = document.getElementById('broadcast');

    //console.log(data);
    bdcast.innerHTML = '<em><i>&#xf304;</i> ' + data + ' is typing a message...</em>';
});