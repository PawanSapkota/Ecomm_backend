declare global {
    namespace NodeJS {
      interface ProcessEnv {
        [key: string]: string | undefined;
        PORT: string;
        NODE_ENV: string;
        DB_HOST:string,
        DB_USERNAME:string,
        DB_PASSWORD:string,
        DB_NAME:string,
        JWT_SECRET:string,
        JWT_EXPIRY:string,
        REFRESH_SECRET:string,
        REFRESH_EXPIRY:string,

        
      }
    }
  }