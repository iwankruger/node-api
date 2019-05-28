import swaggerJSDoc from 'swagger-jsdoc';

// swagger definition
const swaggerDefinition = {
    info: {
        title: 'API Documentation',
        version: '1.0.0',
        description: 'This document describes the API',
    },
    host: 'localhost:3000',
    basePath: '/api',
    securityDefinitions: {
        jwt: {
            type: 'apiKey',
            name: 'x-access-token',
            in: 'header'
        },
        basic: { 
            type: 'basic' 
        },
        // todo implement bearer authentication
        // bearerAuth: {
        //     type: 'apiKey',
        //     name: 'Authorization',
        //     scheme: 'bearer',
        //     in: 'header',
        // }
    },
    security: [
        { basic: [] }, { jwt: [] }
    ]
};

// options for swagger jsdoc
const options = {
    swaggerDefinition, // swagger definition
    apis: [`${__dirname}/controllers/*`], // path where API specification are written
    
};

// initialize swaggerJSDoc
const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
