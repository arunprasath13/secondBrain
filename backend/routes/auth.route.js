import { Router } from "express";
import { User } from "../models/user.model";

const router = Router();


router.get("/callback",async (req,res) => {
    try{
        const {id,firstName,lastName,imageUrl} = req.body;
        const user = User.findOne({clerkId:id})
        if(!user){
            await User.create({
                clerkId:id,
                fullName:`${firstName} ${lastName}`,
                imageUrl:imageUrl
            })
        }
        res.status(200).json({success:true})
    }
    catch(error){
         console.log("Error in auth callback: ",error)
         res.status(500).json({message:"Internal server error"})
    }
})



export default router;