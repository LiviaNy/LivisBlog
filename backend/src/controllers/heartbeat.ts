import {NextFunction, Request, Response} from 'express'

import { db } from "../db/connection"
import HttpException from "../exceptions/httpException"

export const getSystemStatus= async (
    req:Request,
    res:Response,
    next: NextFunction):Promise<void> => {
        const connection = await db.query('SELECT1').catch((error) => next(new HttpException(500, error)))
        if(connection) res.json({db:true})
    }
