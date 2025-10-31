import mongoose from "mongoose";
import validator from "validator";


const waitlistSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    validate: [validator.isEmail, "Please provide a valid email"],
    lowercase: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});


const Waitlist = mongoose.model("Waitlist", waitlistSchema);

export default Waitlist;