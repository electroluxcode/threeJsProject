const express = require('express');
const app = express();

const { proxy } = require('rtsp-relay')(app);

// 设置跨域访问
app.all('*', function (req, res, next) {
  //设置请求头
  //允许所有来源访问
  res.header('Access-Control-Allow-Origin', '*')
  //用于判断request来自ajax还是传统请求
  res.header("Access-Control-Allow-Headers", " Origin, X-Requested-With, Content-Type, Accept");
  //允许访问的方式
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  //修改程序信息与版本
  res.header('X-Powered-By', ' 3.2.1')
  //内容类型：如果是post请求必须指定这个属性
  res.header('Content-Type', 'application/json;charset=utf-8')
  next()
})

app.get('/get',(req,res)=>{
  let url = [
    "rtsp://admin:a123456789@192.168.30.16/Streaming/Channels/1",
    "rtsp://admin:a123456789@192.168.30.17/Streaming/Channels/1",
    "rtsp://admin:a123456789@192.168.30.14/Streaming/Channels/1",
    "rtsp://admin:a123456789@192.168.30.15/Streaming/Channels/1",
  ]
  console.log(req,res)
  res.json({ 
    req:url[req.query.id]
  });
});


const handler = proxy({
  url: `rtsp://admin:a123456789@192.168.30.14/Streaming/Channels/1`,
  // if your RTSP stream need credentials, include them in the URL as above
  verbose: false,
  //提高画质
  additionalOptions: [
    '-rtsp_transport', 'tcp'
  ]
});
const handler1 = proxy({
  url:  "rtsp://admin:a123456789@192.168.30.17/Streaming/Channels/1",

  // if your RTSP stream need credentials, include them in the URL as above
  verbose: false,
  //提高画质
  additionalOptions: [
    '-rtsp_transport', 'tcp'
  ]
});
const handler2 = proxy({
  url: `rtsp://admin:a123456789@192.168.30.15/Streaming/Channels/1`,
  // if your RTSP stream need credentials, include them in the URL as above
  verbose: false,
  //提高画质
  additionalOptions: [
    '-rtsp_transport', 'tcp'
  ]
});
const handler3 = proxy({
  url: `rtsp://admin:a123456789@192.168.30.16/Streaming/Channels/1`,
  // if your RTSP stream need credentials, include them in the URL as above
  verbose: false,
  //提高画质
  // additionalOptions: [
  //   '-rtsp_transport', 'tcp'
  // ]
});






// the endpoint our RTSP uses
app.ws('/api/stream', handler);
app.ws('/api/stream1', handler1);
app.ws('/api/stream2', handler2);
app.ws('/api/stream3', handler3);
// this is an example html page to view the stream
// app.get('/', (req, res) =>
//   res.send(`
//   <canvas id='canvas'></canvas>

//   <script src='https://cdn.jsdelivr.net/gh/phoboslab/jsmpeg@9cf21d3/jsmpeg.min.js'></script>
//   <script>
//   debugger;
//     new JSMpeg.Player('ws://192.168.1.111:2000/api/stream', {
//       canvas: document.getElementById('canvas')
//     })
//   </script>
// `),
// );

app.listen(2000, 'localhost');
