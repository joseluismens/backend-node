import mongoose from "mongoose";
import config from "./config";
(async ()=> {

    try {
        const options = {
            user:config.MONGO_USER,
            password:config.MONGO_PASSWORD
        }
        const db=  await mongoose.connect(`mongodb://${config.MONGO_HOST}/${config.MONGO_DATABASE}`,options);
        console.log('Database is conected ');
        
    } catch (error) {
        console.error(error);
    }
    
})

