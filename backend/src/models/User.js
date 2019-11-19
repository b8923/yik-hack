const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true
    },
    password: {
      type: String,
      required: true
    },
  },
  {
    timestamps: true
  }
);

UserSchema.virtual("id").get(function() {
  return this._id
});

UserSchema.set('toJSON', {
  virtuals: true
});

module.exports = model("User", UserSchema);
