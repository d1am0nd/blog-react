import {Router} from 'express';
import * as path from 'path';

const router = Router();

/* GET admin */
router.get('*', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'node', 'views', 'admin.html'));
});

export default router;
