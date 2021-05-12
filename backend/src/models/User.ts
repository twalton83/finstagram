const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const postSchema = require('./Post');

const userSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  dateOfSignup: { type: Date, default: Date.now },
  private: { type: Boolean, default: false },
  posts: [postSchema],
  followers: { type: Schema.Types.ObjectId, ref: 'User' },
  closeFriends: { type: Schema.Types.ObjectId, ref: 'User' },
  following: { type: Schema.Types.ObjectId, ref: 'User' },
});

const User = mongoose.model('User', userSchema);

export default userSchema;
