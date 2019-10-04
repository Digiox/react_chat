var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

const onlineUsers = [

]
const messageHistory = [

]

socket = io.on('connection', function (socket) {
    console.log("user connected");
    console.log(socket.id);
    socket.on('userName', function (userName) {
        console.log("userName received");

        onlineUsers.push({ userName, id: socket.id })
        console.log(onlineUsers);

        socket.emit('connectionMessage', { connectIsSuccess: true })
    })
    socket.on("requestUserList", function (request) {
        socket.broadcast.emit("userList", { onlineUsers })
    })
    socket.on("requestMessageList", function (request) {
        socket.emit("messageList", { messageHistory })
    })
    console.log(onlineUsers);



    socket.on('newMessage', function (message) {
        console.log("NEW MESSAGE => " + message.author);
        messageHistory.push(message)
        socket.emit('messageReceivedResponse', { status: true })
        console.log(messageHistory);
        socket.broadcast.emit("messageList", { messageHistory })

    })
    socket.on('disconnect', function () {
        console.log(onlineUsers);

        console.log("user disconnected");
        console.log(socket.id);
        onlineUsers.forEach(function (element, index) {
            if (element.id === socket.id) {
                onlineUsers.splice(index, 1)
            }
        })
        console.log(onlineUsers);



    })

})



app.get('/sendChat', function (req, res) {
    res.send('test')
});

http.listen(3500, function () {
    console.log('listening on :3500');
});
