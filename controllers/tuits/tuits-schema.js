import mongoose from 'mongoose';
const schema = mongoose.Schema({
   tuit: String,
   likes: Number,
   dislikes: Number,
   liked: Boolean,
   handle: String,
   image: String,
   time: String,
   topic: String,
   username: String,
   title: String
}, {collection: 'tuits'});
export default schema;