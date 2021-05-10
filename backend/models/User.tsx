const postSchema = require('./Post')

const userSchema = new Schema({
  username: String,
  dateOfSignup: {type: Date, default: Date.now},
  private: {type: Boolean, default: false},
  posts: [postSchema]
})