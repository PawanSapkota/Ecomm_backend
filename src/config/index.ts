import dotenv from 'dotenv';
 dotenv.config();

export const {PORT,DB_HOST,DB_NAME,DB_PASSWORD,DB_USERNAME,JWT_SECRET,JWT_EXPIRY,REFRESH_SECRET,REFRESH_EXPIRY,COOKIE_EXPIRY} = process.env