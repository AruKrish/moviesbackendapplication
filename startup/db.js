const winston = require('winston');
const {mongoose } = require('mongoose');
const config = require('config');

module.exports = function() {
  const db = config.get('db');
  mongoose.set('strictQuery', false);
  mongoose.connect(db,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    connectTimeoutMS: 1000,
  })
    .then(() => winston.info(`Connected to ${db}...`));
}