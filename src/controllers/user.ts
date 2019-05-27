import express from 'express';
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
router.get('/', verify.verifyOrdinaryUser, (req, res, next) => {
    res.send('Users home page');
});

// define the home page route
router.post('/', verify.verifyOrdinaryUser, (req, res, next) => {
    res.send('Users home page');
});

// define the about route
router.get('/about', (req, res) => {
    res.send('About users');
});

export = router;
