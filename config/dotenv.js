var dotenv = require('dotenv');
dotenv.load();

module.exports = {

  db: process.env.MONGODB || 'mongodb://localhost:27017',
  sessionSecret: process.env.SESSION_SECRET || 'THERE IS NO SECRET'

};
