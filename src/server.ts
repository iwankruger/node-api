import express from 'express';
const app = express();
import user from './controllers/user';

import swaggerJSDoc from 'swagger-jsdoc';
// swagger definition
var swaggerDefinition = {
    info: {
        title: 'Node Swagger API',
        version: '1.0.0',
        description: 'Hello i am swagger . I am one step ahead of postman. My job is to provide API description',
    },
    host: 'localhost:3000',
    basePath: './controllers',
};

// options for swagger jsdoc
var options = {
    swaggerDefinition: swaggerDefinition, // swagger definition
    apis: [`${__dirname}/controllers/*`], // path where API specification are written
};

// initialize swaggerJSDoc
var swaggerSpec = swaggerJSDoc(options);

app.get('/swagger.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
});


import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json';

//  Connect all our routes to our application
app.use('/users', user);

app.get('/', (req, res) => {
    res.send('Hello world!!!');
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(3000, () => console.log('Example app listening on port 3000!'));
