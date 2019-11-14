const { Schema, model } = require("mongoose");
const PointSchema = require("./Schemas/PointSchema");

const PostSchema = new Schema(
  {
    text: {
      type: String,
      required: true
    },
    location: {
      type: PointSchema,
      required: true,
      index: {
        type: "2dsphere"
      }
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
