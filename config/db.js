import mongoose from "mongoose";

const connectToMongo = async ()=>{
    const res = mongoose.connect("mongodb+srv://shirishanelapogula:6Trl1RcRIQCcSPP2@cluster0.rabrwjy.mongodb.net/blog-app?retryWrites=true&w=majority")

    if (res){
        console.log("Connected successfully");
    }
};


export default connectToMongo