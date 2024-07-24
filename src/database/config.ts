import mongoose from "mongoose";
import settings from "../settings";


export const connect_to_mongo = async () => {

    try{

        console.log("Connecting to database...");

        const url = settings.database;
    
        await mongoose.connect(url);

        const db = mongoose.connection;
    
        db.on('error', console.error.bind(console, 'connection error:'));

        console.log("Connection to MongoDB established.")

    }
    catch(err){
        console.log("Error connecting to MongoDB: ", err);
    }
 

    
}


export const disconnect_from_mongo = async () => {
    console.log("Disconnecting from database...");

    mongoose.disconnect();

    console.log("Connection to MongoDB closed.")
}   