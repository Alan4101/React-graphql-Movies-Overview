import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import validator from "validator";

const Users = new mongoose.Schema(
  {
    firstName: { type: String },
    lastName: { type: String },
    age: { type: Number },
    email: {
      type: String,
      unique: true,
      required: "Email address is required",
      validate: [validator.isEmail, "Please provide a valid email"],
    },
    password: {
      type: String,
      required: true,
      minlength: [8, "Password must be more than 8 characters"],
    },
    role: {
      type: String,
      default: "user",
    },
    picture: { type: String },
    verified: {
      type: Boolean,
      default: true,
      select: false,
    },
  },
  {
    versionKey: false,
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);
Users.index({ email: 1 });
// Users.pre("save", function (next) {
//   const user = this;
//   if (this.isModified("password") || this.isNew) {
//     bcrypt.genSalt(10, function (saltError, salt) {
//       if (saltError) {
//         return next(saltError);
//       } else {
//         bcrypt.hash(user.password, salt, function (hashError, hash) {
//           if (hashError) return next(hashError);

//           user.password = hash;
//           next();
//         });
//       }
//     });
//   } else {
//     return next();
//   }
// });
Users.pre("save", async function (next) {
  // Check if the password has been modified
  if (!this.isModified("password")) return next();

  // Hash password with strength of 12
  this.password = await bcrypt.hash(this.password, 12);

  // Remove the password confirm field
  this.passwordConfirm = undefined;
  next();
});

// Users.methods.comparePassword = function (password, callback) {
//   bcrypt.compare(password, this.password, function (error, isMatch) {
//     return error ? callback(error) : callback(null, isMatch);
//   });
// };
Users.methods.comparePassword = async function (
  candidatePassword,
  hashedPassword
) {
  return await bcrypt.compare(candidatePassword, hashedPassword);
};

const UsersModel = mongoose.model("Users", Users);
export default UsersModel;
// https://coderrocketfuel.com/article/store-passwords-in-mongodb-with-node-js-mongoose-and-bcrypt
