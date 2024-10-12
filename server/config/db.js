import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config();

const Connect = async () => {
    try{
      await mongoose.connect(process.env.URL)
      console.log("MongoDB Connected");
    }catch(err){
            console.log("MongoDb connection failed", err)
    }   
};


export default Connect;
