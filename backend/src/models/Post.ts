const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;
const userSchema = require('./User');
const commentSchema = require('./Comment');

const User = mongoose.model('User', userSchema);
const Comment = mongoose.model('Comment', commentSchema);

const postSchema = new Schema({
  image: String,
  date: { type: Date, default: Date.now() },
  edited: { type: Date, default: false },
  author: { type: Schema.Types.ObjectId, ref: 'User' },
  likes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
  caption: String,
});

export default postSchema;
