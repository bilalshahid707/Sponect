import { catchAsync } from "../utils/CatchAsync";
import Waitlist from "../models/waitlist";

export const newMember = catchAsync(async(req:any,res:any)=>{
    const member = Waitlist.createDocument({email:req.body.email})
    await member.save()

    res.status(201).json({
        status:"success",
        message:"You have been added to the waitlist",
        data:{
            member
        }
    })
})