import mongoose from "mongoose";

const connectToMongo = async () => {
    try {
        await mongoose.connect("mongodb+srv://shirisha:K6KyK4fPJX7Msonm@cluster2.cm7tvff.mongodb.net/blog-backend?retryWrites=true&w=majority");
        console.log("Connected successfully");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};

export default connectToMongo;
