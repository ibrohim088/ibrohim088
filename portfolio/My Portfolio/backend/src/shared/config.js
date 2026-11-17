import 'dotenv/config.js'

export default {
  PORT: process.env.MY_PORT || 8000,
  EMAIL_PATH_FROM: process.env.MY_EMAIL_USER_FROM,
  EMAIL_PATH_TO: process.env.MY_EMAIL_USER_TO,
  EMAIL_PASS: process.env.MY_EMAIL_PASS,
  CLIENT_URL: process.env.MY_CLIENT_URL,
  CLIENT_MB_URL: process.env.MY_CLIENT_MB_URL,
  CLIENT_HOST: process.env.MY_CLIENT_HOST,

  DB: {
    host: process.env.MYSQL_HOST || 'localhost',
    port: parseInt(process.env.MYSQL_PORT) || 3307,
    user: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || '',
    database: process.env.MYSQL_DATABASE || 'myPortfolio',
  }
}
