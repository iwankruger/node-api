import passport from 'passport';
import {Strategy as LocalStrategy } from 'passport-local';

passport.use(new LocalStrategy((username, password, next) => {
    console.log('debug local strategy ');
    if (username === 'admin' && password === 'password') {
        return next(null, {name: 'name'});
    }

    return next(null, false);
}));

export let verifyOrdinaryUser = passport.authenticate('local', { session: false });

/*
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
*/


