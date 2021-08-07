import {Request, Response, NextFunction} from 'express'
import { DatabaseConnectionError } from '../errors/database-connection-error'
import { RequestValidationError } from '../errors/request-validaiton-error'

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    if(err instanceof RequestValidationError) {
        return res.status(err.statusCode).json({
            errors: err.serializeErrors()
        })
    }
    else if (err instanceof DatabaseConnectionError) {
        return res.status(err.statusCode).json({
            errors: err.serializeErrors()
        })
    }
}