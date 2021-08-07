import express from 'express';

const router = express.Router();

// get current user
router.get("/api/users/signout", (req, res, next) => {
    res.send('Hi there!');
})


export {router as signoutRouter};