import * as bodyParser from 'body-parser';
import express, { NextFunction, Request, Response } from 'express';
import passport from 'passport';
import swaggerUi from 'swagger-ui-express';
import user from './controllers/user';
import { getNodeEnv } from './env';
import swaggerSpec from './swaggerConfiguration';
import * as verify from './verify';


const app = express();

app.use(bodyParser.json());
app.use(passport.initialize());

app.use((error, req: Request, res: Response, next: NextFunction) => {
   res.writeHead(error.status || 500, {
       'Content-Type': 'text/plain',
       'WWW-Authenticate': 'Basic',
   });

   res.end(error.message);
});

//  Connect all our routes to our application
app.use('/api/users', user);

// todo: this is just for illustration purposes, remove example
app.post('/test', verify.verifyOrdinaryUserBasic, (req: Request, res: Response, next: NextFunction) => {
    res.send('Hello world10!!! ENV = ' + getNodeEnv());
});

app.use('/api-docs', verify.verifyOrdinaryUserBasic, swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(3000, () => console.log('Example app listening on port 3000!'));

// TODO
// swagger
// swagger authentication
// swagger logo replace (low priority)
// route authentication

// dockerize project (docker compose)
// add ENV
// unit testing
// message queue communication between micro services
