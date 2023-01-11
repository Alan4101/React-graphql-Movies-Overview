import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const Users = new mongoose.Schema(
  {
    firstName: { type: String },
    lastName: { type: String },
    age: { type: Number },
    email: {
      type: String,
      unique: true,
      required: "Email address is required",
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address",
      ],
      sparse: true,
    },
    password: {
      type: String,
    },
    role: {
      type: String,
    },
  },
  { versionKey: false }
);

Users.pre("save", function (next) {
  const user = this;
  if (this.isModified("password") || this.isNew) {
    bcrypt.genSalt(10, function (saltError, salt) {
      if (saltError) {
        return next(saltError);
      } else {
        bcrypt.hash(user.password, salt, function (hashError, hash) {
          if (hashError) return next(hashError);

          user.password = hash;
          next();
        });
      }
    });
  } else {
    return next();
  }
});

Users.methods.comparePassword = function (password, callback) {
  bcrypt.compare(password, this.password, function (error, isMatch) {
    return error ? callback(error) : callback(null, isMatch);
  });
};

const UsersModel = mongoose.model("Users", Users);
export default UsersModel;
// https://coderrocketfuel.com/article/store-passwords-in-mongodb-with-node-js-mongoose-and-bcrypt