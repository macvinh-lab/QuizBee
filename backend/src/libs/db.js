import mongoose from "mongoose";
export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_CONNECTIONSTRING);
        console.log("connect success");
    } catch (error) {
        console.error("fail to connect to DB: ", error)
        process.exit(1); //thoat voi trang thai that bai 
    }
}