const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const cookieParser = require('cookie-parser');
const app = express();
const httpServer = require('http').createServer(app);
const io = require('socket.io')(httpServer);

require('dotenv').config();

const PORT = process.env.PORT || 5000;
const PORTSOCKET = process.env.PORT || 4000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

const mongo = process.env.MONGO_URI;

mongoose
  .connect(mongo, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log('MongoDB Connected...🌼'))
  .catch((err) => console.log(err));

app.use('/api/chart', require('./routes/chart'));
app.use('/api/game', require('./routes/game'));
app.use('/api/youtube', require('./routes/youtube'));
app.use('/api/user', require('./routes/user'));
app.use('/api/comment', require('./routes/comment'));
app.use('/api/heart', require('./routes/heart'));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('cli/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../cli', 'build', 'index.html'));
  });
}

io.on('connection', (socket) => {
  console.log('a user connected...🙆‍♀️');
  socket.on('disconnect', () => {
    console.log('user has left');
  });
});

httpServer.listen(PORTSOCKET, () => {
  console.log(`socket.io is running on ${PORTSOCKET}...✨`);
});

app.listen(PORT, () => {
  console.log(`running on ${PORT}`);
});
