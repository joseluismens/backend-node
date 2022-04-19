import  Express  from "express";
import morgan from "morgan";
import config  from "./config";
import videoRoutes from "./routes/videos.routes";
import cors from 'cors';
const app = Express();

app.set('port',3000);

app.use(morgan('dev'));
app.use(cors());
app.use(Express.json);
app.use(Express.urlencoded({extended:false}));
app.use(videoRoutes);


export default app;