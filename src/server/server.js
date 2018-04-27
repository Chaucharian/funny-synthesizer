const path = require('path');
const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const SerialPort = require("serialport");

const Readline = SerialPort.parsers.Readline;
const port = new SerialPort('COM4', { autoOpen: false, baudRate: 9600 });
const parser = new Readline();
port.pipe(parser);

//public folders where the user catch dependencies
app.use(express.static(path.resolve(__dirname, '../public')) );
//it returns a main page to play the game|
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

http.listen(3000, () => {
  console.log('listening on: 3000!');
});

io.on('connection', (socket) => {
  console.log('client connected');
});
//Open arduino port
port.open(function (err) {
  if (err) {
    return console.log('Error opening port: ', err.message);
  }

  // Because there's no callback to write, write errors will be emitted on the port:
  port.write('main screen turn on');
});

// The open event is always emitted
port.on('open', function() {
  // open logic
  console.log('PORT OPENED');
});

parser.on('data', function (data) {
  let distance = data.split(':')[1].split('/')[0];
  io.emit('sendDistance', distance);
});
