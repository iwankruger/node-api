import express, { NextFunction, Request, Response } from 'express';
import * as verify from '../verify';

const router = express.Router();

/**
 * @swagger
 * /list:
 *   get:
 *     summary: List all the animals
 *     description: Returns a list of all the animals, optionally sorted
 *     tags:
 *       - animals
 *     parameters:
 *       - in: query
 *         name: sort
 *         type: string
 *         required: false
 *         enum:
 *           - yes
 *           - no
 *     responses:
 *       200:
 *         description: List of animals
 *         schema:
 *           type: object
 *           properties:
 *             animals:
 *               type: array
 *               description: all the animals
 *               items:
 *                 type: string
 */

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

// define the home page route
router.get('/', verify.verifyOrdinaryUserJwt, (req: Request, res: Response, next: NextFunction) => {
    res.send('Users home page');
});

// define the home page route
router.post('/', verify.verifyOrdinaryUserBasic, (req: Request, res: Response, next: NextFunction) => {
    res.send('Users home page');
});

// define the about route
router.get('/about', (req, res) => {
    res.send('About users');
});

// login user, using local strategy and obtain jwt token
router.post('/login', verify.verifyOrdinaryUserLocal, (req: Request, res: Response, next: NextFunction) => {
    verify.getToken(req.body.username, req.body.password).then((token) => {
        return res.send({ token });
    }).catch((error) => {
        return res.status(401).send('Unauthorized');
    });
});

export = router;

// test
