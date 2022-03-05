import express, { Request, Response } from 'express';
import { logger } from '../../controller/logger';

const routes = express.Router();

routes.get('/', logger, (req: Request, res: Response) => {
  // res.send('you have hit the user route, congratulations!');
  res.json({ name: 'frodo' });
  logger;
});

routes.get('/cart', logger, (req: Request, res: Response) => {
  res.send('you have hit the cart route, congratulations!');
  logger;
});

routes.get('/checkout', (req: Request, res: Response): void => {
  res.send('you have hit the checkout route, congratulations!');
  console.log(req.url);
});

export default routes;
