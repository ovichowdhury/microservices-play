import { ValidationError } from "express-validator";
import { CustomError } from "./custom-error";


export class RequestValidationError extends CustomError {
    statusCode = 400;

    constructor(private errors: ValidationError[]) {
        super('Request validation error');
        Object.setPrototypeOf(this, RequestValidationError.prototype);
    }

    serializeErrors() {
        const formattedErrors = this.errors.map(e => {
            return {message: e.msg, field: e.param};
        })
        return formattedErrors;
    }


}