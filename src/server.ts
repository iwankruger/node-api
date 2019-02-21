import express from 'express';
const app = express();
import user from './controllers/user';

import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json';

//  Connect all our routes to our application
app.use('/users', user);

app.get('/', (req, res) => {
    res.send('Hello world!!!');
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(3000, () => console.log('Example app listening on port 3000!'));
