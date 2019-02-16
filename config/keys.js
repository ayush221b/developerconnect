require('dotenv').config();

module.exports = {
    mongoURI: process.env.DB_CONN,
    secret: process.env.SECRET
};