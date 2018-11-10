const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

mongoose.connect(
    'mongodb://gabriel1lima:biel0907@ds155213.mlab.com:55213/goweek-gabriel1lima-backend', 
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

server.listen(port);