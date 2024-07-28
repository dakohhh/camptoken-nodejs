import dotenv from 'dotenv'
dotenv.config();



const config = {
    development: {
        // Development environment settings
        port: process.env.PORT || 3000,
        database: process.env.DEV_MONGO_URL as string,
        secret_key: process.env.SECRET_KEY,
        EMAIL_CREDENTIAL: {
            SMTP_HOST: process.env.MAIL_HOST?.toString(),
            SMTP_PORT: process.env.MAIL_PORT?.toString(),
            SMTP_USER: process.env.MAIL_USERNAME?.toString(),
            SMTP_PASSWORD: process.env.MAIL_PASSWORD?.toString(),
            EMAIL_SECURE: process.env.EMAIL_SECURE
        }

    },

    production: {
        // Production environment settings
        port: process.env.PORT || 3000,
        database: process.env.PROD_MONGO_URL as string,
        secret_key: process.env.SECRET_KEY,
        EMAIL_CREDENTIAL: {
            SMTP_HOST: process.env.MAIL_HOST?.toString(),
            SMTP_PORT: process.env.MAIL_PORT?.toString(),
            SMTP_USER: process.env.MAIL_USERNAME?.toString(),
            SMTP_PASSWORD: process.env.MAIL_PASSWORD?.toString(),
            EMAIL_SECURE: process.env.EMAIL_SECURE
        }

    },
};


const environment: string  = process.env.NODE_ENV ? "development" : "production";


export default config[environment as keyof typeof config]