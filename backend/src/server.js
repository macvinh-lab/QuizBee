import express from "express";
import authRoute from "./routes/authRoute.js"
import { connectDB } from "./libs/db.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001
app.use(express.json());

// PUBLIC ROUTES
app.use('/api/auth', authRoute);


// PRIVATE ROUTES

connectDB().then(() =>{
    app.listen(PORT, () => {
    console.log(`server start on port ${PORT}`);
});
});





