const mongoose = require("mongoose");

const blogsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  topics: {
    type: [String],
    required: true,
  },

  paragraphs: {
    type: [mongoose.Schema.Types.Mixed],
    required: true,
  },
  imageUrl:{
    type:String,
    required:true
  },
  author: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
});
module.exports = mongoose.model("Blog", blogsSchema);
