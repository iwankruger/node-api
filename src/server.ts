import express from 'express';
import swaggerUi from 'swagger-ui-express';
import user from './controllers/user';
import swaggerSpec from './swaggerConfiguration';

const app = express();

//  Connect all our routes to our application
app.use('/users', user);

app.get('/', (req, res) => {
    res.send('Hello world!!!');
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(3000, () => console.log('Example app listening on port 3000!'));
