import {Router} from 'express';
import * as VideoController from '../controllers/videos.controller';
import { validateSchema } from "../middlewares/validateShema.middleware";
import { CreateVideoSchema } from "../schema/video.schema";

const router = Router();

router.get('/videos',VideoController.getVideos);
router.get("/videos/:id", VideoController.getVideo);

router.post("/videos", validateSchema(CreateVideoSchema), VideoController.createVideo);

router.delete("/videos/:id", VideoController.deleteVideo);

router.put("/videos/:id", VideoController.updateVideo);

export default router;