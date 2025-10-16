import mongoose from "mongoose";
import validator from "validator";

interface IWaitlist {
  email: string;
}

interface IWaitlistDocument extends IWaitlist,mongoose.Document{
  createdAt: Date
}

interface IWaitlistModel extends mongoose.Model<IWaitlistDocument>{
    createDocument(document:IWaitlist):IWaitlistDocument
}

const waitlistSchema = new mongoose.Schema<IWaitlistDocument>({
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

waitlistSchema.static("createDocument",function(document:IWaitlist){
    return new this(document)
})

const Waitlist = mongoose.model<IWaitlistDocument,IWaitlistModel>("Waitlist", waitlistSchema);

export default Waitlist;