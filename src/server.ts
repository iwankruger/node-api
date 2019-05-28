import express from 'express';
import swaggerUi from 'swagger-ui-express';
import user from './controllers/user';
import swaggerSpec from './swaggerConfiguration';
import passport from 'passport';
import * as bodyParser from 'body-parser';
import * as verify from './verify';

const app = express();

app.use(bodyParser.json());
app.use(passport.initialize());

app.use((error, req, res, next) => {
   res.writeHead(error.status || 500, {
       'Content-Type': 'text/plain',
       'WWW-Authenticate': 'Basic',
   });

   res.end(error.message);
});


//  Connect all our routes to our application
app.use('/users', user);

// todo: this is just for illustration purposes, remove example
app.post('/test', verify.verifyOrdinaryUser, (req, res) => {
    res.send('Hello world10!!!');
});

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
