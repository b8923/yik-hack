const { Schema, model } = require("mongoose");

const PostSchema = new Schema(
  {
    text: {
      type: String,
      required: true
    },
    latitude: {
      type: Number,
      required: true
    },
    longitude: {
      type: Number,
      required: true
    },
    userAvatar: String,
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: "Comment",
      }
    ],
    upvotes: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      }
    ],
    downvotes: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      }
    ]
  },
  {
    timestamps: true
  }
);

module.exports = model("Post", PostSchema);
