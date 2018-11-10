const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

mongoose.connect(
    'mongodb://goweek:biel0907@ds157923.mlab.com:57923/backend_goweek2018', 
    {
        useNewUrlParser: true
    }
);

app.use((req, res, next) => {
    req.io = io;

    return next();
});

app.use(cors());
app.use(express.json());
app.use(require('./routes'));


let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
console.log(port)

server.listen(port);