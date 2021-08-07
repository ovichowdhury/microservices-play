import express, { Request, Response, NextFunction } from 'express';
import { body, validationResult } from 'express-validator';
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
      return res.status(400).send(errors.array())
    }
    const {email, password} = req.body;
    console.log("[INFO] Creating an user");
    res.status(200).json({});
  }
)


export { router as signupRouter };