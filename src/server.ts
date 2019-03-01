import express from 'express';
import swaggerUi from 'swagger-ui-express';
import user from './controllers/user';
import swaggerSpec from './swaggerConfiguration';

const app = express();

function auth(req, res, next) {
    console.log(req.header);
    let authHeader = req.headers.authorization;

    console.log(JSON.stringify(authHeader));

    if (!authHeader) {
        let error = new Error('You are not authenticated!');
        error['status'] = 401;
        return next(error);
    }

    let auth = new Buffer (authHeader.split(' ')[1], 'base64').toString().split(':');
    var user = auth[0];
    var password = auth[1];

    if (user === 'admin' && password === 'password') {
        return next();
    }

    let error = new Error('You are not authenticated!');
    error['status'] = 401;
    return next(error);


}


app.use(auth);

app.use((error, req, res, next) => {
   res.writeHead(error.status || 500, {
       'WWW-Authenticate': 'Basic',
       'Content-Type': 'text/plain'
   });

   res.end(error.message);
});




//  Connect all our routes to our application
app.use('/users', user);

app.get('/', (req, res) => {
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
// proto buff
