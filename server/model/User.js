const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
    userName: { type: String, unique: true, maxLength: 10 },
    record: Number,
    correctTrackName: Array,
    wrongTrackName: Array,
    gameResult: Array,
    theme: Array,
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

module.exports = { User };
