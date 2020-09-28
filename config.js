const dotenv = require('dotenv');
dotenv.config();

module.exports.heure = process.env.HEURE
module.exports.minutes = process.env.MINUTES
module.exports.token = process.env.TOKEN
