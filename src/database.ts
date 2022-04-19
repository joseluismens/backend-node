import mongoose from "mongoose";
import config from "./config";
(async ()=> {
    try {
        const db=  await mongoose.connect('mongodb://localhos/mern-database');
        console.log('Database is conected ');
        
    } catch (error) {
        console.error(error);
    }
    
})

