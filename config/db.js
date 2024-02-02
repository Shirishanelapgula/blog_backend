import mongoose from "mongoose";

const connectToMongo = async ()=>{
    const res = mongoose.connect("mongodb+srv://shirisha:K6KyK4fPJX7Msonm@cluster2.cm7tvff.mongodb.net/blog-project?retryWrites=true&w=majority")

    if (res){
        console.log("Connected successfully");
    }
};


export default connectToMongo