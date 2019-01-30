import express from 'express';
const app = express();
import user from './controllers/user';

//  Connect all our routes to our application
app.use('/users', user);

app.get('/', (req, res) => {
    res.send('Hello world!!!');
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
