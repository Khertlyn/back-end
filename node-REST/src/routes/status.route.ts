import { Router, Request, Response, NextFunction } from 'express';//biblioteca para gerenciar rotas http
import { StatusCodes } from 'http-status-codes';

const statusRoute = Router();

statusRoute.get('/status', (req: Request, res: Response, next: NextFunction) => {
    res.sendStatus(StatusCodes.OK);
});

export default statusRoute;