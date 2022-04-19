import app from "./app";
import './database';
import config from "./config";
app.listen(3000,()=>{
    console.log(config.PORT);
    
})