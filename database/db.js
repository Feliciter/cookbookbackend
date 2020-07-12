
require('dotenv').config()

module.exports = {
    db: process.env.MONGODB_URI || 'mongodb://localhost:27017/cookbookmean'
  };