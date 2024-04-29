"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerOptions = void 0;
const index_1 = require("./index");
exports.swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Ecommerce Website',
            version: '1.0.0',
            description: 'API documentation for Ecommerce Website',
            contact: {
                name: 'Pawan Sapkota',
                email: 'sapkotapawan33@gmail.com',
            },
        },
        servers: [
            {
                url: `http://localhost:${index_1.PORT}`,
                description: 'Local development server',
            },
        ]
    },
    tags: [
        {
            name: 'Authentication'
        },
    ],
    docExpansion: 'none',
    apis: ['./docs/*.yaml',]
};
