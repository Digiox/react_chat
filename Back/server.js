var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

onlineUsers = [

]

socket = io.on('connection', function(socket) {
    console.log("user connected");
    onlineUsers.push({
        nick: "client1"
    })
    socket.emit('connectionMessage', {success: "true"})
    socket.on('disconnect', function() {
        console.log("user disconnected");
        
    })
    
})



app.get('/sendChat', function (req, res){
    res.send('test')
});

http.listen(3500, function(){
    console.log('listening on :3500');
  });
  