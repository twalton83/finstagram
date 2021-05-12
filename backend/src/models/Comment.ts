const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = require('./User');

const User = mongoose.model('User', userSchema);

const commentSchema = new Schema({
  author: { type: Schema.Types.ObjectId, ref: 'User' },
  text: String,
  timestamp: { type: Date, default: Date.now() },
  edited: {
    type: Boolean,
    default: false,
  },
  replies: [this],
});

export default commentSchema;
