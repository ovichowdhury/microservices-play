import express from 'express';
import { json } from 'body-parser';

import { currentUserRouter } from './routes/current-user';
import { signinRouter } from './routes/singin';
import { signoutRouter } from './routes/singout';
import { signupRouter } from './routes/singup';
import { errorHandler } from './middlewares/error-handler';
import { NotFoundError } from './errors/not-found-error';

const app = express();

app.use(json());

app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);

// not found handler
app.all('*', () => {
    throw new NotFoundError()
})

// error handling middleware
app.use(errorHandler);


app.listen(3000, () => {
    console.log("Listening on port 3000!");
})