const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;
const userSchema = require('./User');
const commentSchema = require('./Comment');

const postSchema = new Schema({
  image: String,
  date: { type: Date, default: Date.now() },
  edited: { type: Date, default: false },
  author: ObjectId,
  likes: [userSchema],
  comments: [commentSchema],
  caption: String,
});

export default postSchema;
