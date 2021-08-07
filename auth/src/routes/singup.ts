import express, { Request, Response, NextFunction } from 'express';
import { body, validationResult } from 'express-validator';
import { DatabaseConnectionError } from '../errors/database-connection-error';
import { RequestValidationError } from '../errors/request-validaiton-error';
const router = express.Router();

// get current user
router.post("/api/users/signup",
  [
    body('email')
      .isEmail()
      .withMessage('Email must be valid'),
    body('password')
      .trim()
      .isLength({min: 4, max: 20})
      .withMessage('Password must be between 4 and 20 characters')

  ],
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
      throw new RequestValidationError(errors.array());
    }
    const {email, password} = req.body;
    console.log("[INFO] Creating an user");
    throw new DatabaseConnectionError();
    res.status(200).json({});
  }
)


export { router as signupRouter };