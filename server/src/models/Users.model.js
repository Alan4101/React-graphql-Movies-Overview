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
    authToken: { type: String, required: true },
    // roles: [{
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: 'RolesModel'
    // }],
    picture: { type: String },
    verified: {
      type: Boolean,
      default: true,
      select: false,
    },
    // temperary solution
    recomendedList: [
      {
        title: { type: String, required: true },
        createdData: { type: String, required: true },
        description: { type: String, required: true },
        movies: [
          {
            _id: { type: String, required: true },
            title: { type: String, required: true },
            poster: { type: String, required: true },
            releaseDate: String,
            adult: Boolean,
            movieId: String,
            genres: [String],
            overview: String,
            voteCount: Number,
            userDescription: String,
            sequenceNumber: Number,
          },
        ],
      },
    ],
  },
  {
    versionKey: false,
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);
Users.index({ email: 1 });

Users.pre("save", function (next) {
  const user = this;

  // Check if the password has been modified
  if (!user.isModified("password")) return next();

  bcrypt.genSalt(12, (err, salt) => {
    if (err) return next(err);
    // Hash password with strength of 12
    user.password = bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});

Users.methods.comparePassword = async function (
  candidatePassword,
  hashedPassword
) {
  return await bcrypt.compare(candidatePassword, hashedPassword);
};

const UsersModel = mongoose.model("Users", Users);
export default UsersModel;
// https://coderrocketfuel.com/article/store-passwords-in-mongodb-with-node-js-mongoose-and-bcrypt
