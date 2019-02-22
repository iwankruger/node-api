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
};

// options for swagger jsdoc
const options = {
    swaggerDefinition, // swagger definition
    apis: [`${__dirname}/controllers/*`], // path where API specification are written
};

// initialize swaggerJSDoc
const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
