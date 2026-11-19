import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
    name : String,
    email :  { type : String, unique : true},
    password : String,
    role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
})

userSchema.pre("save", async function () {
  // If the password hasn't been modified, skip hashing
  if (!this.isModified("password")) return;

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});


userSchema.methods.comparePassword = function (inputPassword) {
  return bcrypt.compare(inputPassword, this.password);
};

const User = mongoose.model("User", userSchema);

export default User;
