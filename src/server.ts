import express from 'express';
import swaggerUi from 'swagger-ui-express';
import user from './controllers/user';
import swaggerSpec from './swaggerConfiguration';
import passport from 'passport';
import {Strategy as LocalStrategy } from 'passport-local';
import * as bodyParser from 'body-parser';

const app = express();

/*function auth(req, res, next) {
    console.log(req.header);
    const authHeader = req.headers.authorization;

    console.log(JSON.stringify(authHeader));

    const error = new Error('You are not authenticated!');
    error['status'] = 401;

    if (!authHeader) {
        return next(error);
    }

    const authData = new Buffer (authHeader.split(' ')[1], 'base64').toString().split(':');
    const username = authData[0];
    const password = authData[1];

    if (username === 'admin' && password === 'password') {
        return next();
    }

    return next(error);


}*/


//app.use(auth);


app.use(bodyParser.json());

passport.use(new LocalStrategy((username, password, next) => {
    console.log('debug local strategy ');
    if (username === 'admin' && password === 'password') {
        return next(null);
    }

    return next(null, false);
}));


app.use((error, req, res, next) => {
   res.writeHead(error.status || 500, {
       'Content-Type': 'text/plain',
       'WWW-Authenticate': 'Basic',
   });

   res.end(error.message);
});




//  Connect all our routes to our application
app.use('/users', user);

app.post('/',  passport.authenticate('local'), (req, res) => {
    res.send('Hello world10!!!');
});

console.log('hello world10!!!');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(3000, () => console.log('Example app listening on port 3000!'));

// TODO
// swagger
// swagger authentication
// swagger logo replace (low priority)
// route authentication

// dockerize project (docker compose)
// unit testing
// message queue communication between micro services
