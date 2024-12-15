import mongoose from "mongoose";
export const dbConnection = ()=> {
  mongoose.connect(process.env.MONGO_URI ,{
    dbName :"RESTAURANT_RESERVATION"
  })
  .then(() => {
    console.log("Mongoose connection successfully");
  })
  .catch((error)=>{
    console.log("Something went wrong Not Connecting with Mongoose", error);
  })
}

