var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/',(req,res) => {
    res.sendFile(__dirname + '/views/index.html');
})

io.on('connection', function(socket){
    socket.broadcast.emit('hi');
    socket.on('chat message', function(msg){
        io.emit('chat message', msg);
      
    });
  });





http.listen(3000,()=>{
    console.log('Listening on *:3000');
})