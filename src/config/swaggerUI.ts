import { PORT} from "./index"

export const swaggerOptions = {
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
                url: `http://localhost:${PORT}`,
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
  }