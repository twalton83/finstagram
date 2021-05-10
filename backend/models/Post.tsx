import mongoose from 'mongoose';
const ObjectId = mongoose.Types.ObjectId;

const postSchema = new Schema({
  image: String,
  date: { type: Date, default: Date.now() },
  edited: { type: Date, default: false },
  author: ObjectId
});


export {postSchema}