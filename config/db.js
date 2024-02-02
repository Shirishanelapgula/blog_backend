import mongoose from "mongoose";

const connectToMongo = async () => {
    try {
        await mongoose.connect("mongodb+srv://shirishanelapogula:6Trl1RcRIQCcSPP2@cluster0.rabrwjy.mongodb.net/blog-app?retryWrites=true&w=majority");
        console.log("Connected successfully");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};

export default connectToMongo;
