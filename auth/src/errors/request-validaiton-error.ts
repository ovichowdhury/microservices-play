import { ValidationError } from "express-validator";


export class RequestValidationError extends Error {
    statusCode = 400;

    constructor(private errors: ValidationError[]) {
        super();
        Object.setPrototypeOf(this, RequestValidationError.prototype);
    }

    serializeErrors() {
        const formattedErrors = this.errors.map(e => {
            return {message: e.msg, field: e.param};
        })
        return formattedErrors;
    }


}