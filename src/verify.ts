import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { BasicStrategy } from 'passport-http'

passport.use(new LocalStrategy((username, password, next) => {
    console.log('debug local strategy ');
    // todo: get verify username and password against database
    if (username === 'admin' && password === 'password') {
        return next(null, { name: 'name' });
    }

    return next(null, false);

}));

passport.use(new BasicStrategy((username, password, next) => {
    console.log('debug basic strategy ');
    // todo: get verify username and password against database
    if (username === 'admin' && password === 'password') {
        return next(null, { name: 'name' });
    }

    return next(null, false);

}));

export let verifyOrdinaryUserLocalStrategy = passport.authenticate('local', { session: false });
export let verifyOrdinaryUser = passport.authenticate('basic', { session: false });

/*
todo: remove notes

export function verifyOrdinaryUser(req, res, next) {
    console.log('verify ordinary user');
    let error: any = new Error('You are not authenticated!');
    error.status = 401;
    //return next(error);
    return next();
}

export function verifyAdmin(req, res, next) {
    console.log('verify admin');
    return next();
}

function auth(req, res, next) {
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


}
app.use(auth);

*/
