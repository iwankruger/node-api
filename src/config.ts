export const settings = {
    development: {
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        password: process.env.DB_PASS,
        username: process.env.DB_USER,
    },
    production: {
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        password: process.env.DB_PASS,
        username: process.env.DB_USER,
    },
    test: {
        database: 'test_' + process.env.DB_NAME,
        host: process.env.DB_HOST,
        password: process.env.DB_PASS,
        username: process.env.DB_USER,
    }
};
