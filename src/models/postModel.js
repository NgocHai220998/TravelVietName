let mongoose = require("../../config/mongodb/db.js");

let postSchema = mongoose.Schema({
  approval: Boolean,
  host: String,
  city: String,
  aboutHost: String,
  dola: {
    value: String,
    time: String
  },
  star: Number,
  post: {
    title: String,
    about: String,
    images: [
      {
        src: String
      }
    ],
    toDo: String,
    provide: String,
    who: String,
    why: String,
    where: {
      city: String,
      image: String
    },
    comments: [
      {
        name: String,
        star: Number,
        content: String
      }
    ]
  }
});

const Post = mongoose.model("post", postSchema);

module.exports = Post;
