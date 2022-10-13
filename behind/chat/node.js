const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
var io = new Server(server,{ cors: true });
const cors = require('cors')
app.use(cors())
// let numbers=[]
// let numbers2=[]



// let i=0


//设置跨域访问
app.all('*', function (req, res, next) {
    console.log(req)
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Headers', ['mytoken','Content-Type']);
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    res.header("Content-Type", 'charset=utf-8');
    next();
});


server.listen(3002, () => {
    console.log('listening on *:3002');
});

io.on('connection', (socket) => {
    socket.join('room')
    console.log('连接的id是 '+socket.id);
    socket.on('disconnect',function (data) {
        console.log('断开')
    })
    socket.on('message',function (data) {
        console.log('message',data)
        //emit发送给所有人
        //on只发送给自己
        socket.broadcast.to('room').emit('message', data);
    })
});