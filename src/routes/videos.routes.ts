import {Router} from 'express';
import * as VideoController from './videos.controller';
const router = Router();

router.get('/videos',VideoController.getVideos);

export default router;