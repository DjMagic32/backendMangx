require('dotenv').config();
const mongoose = require('mongoose');

// Agrega esta línea aquí
mongoose.set('strictQuery', true);

const url = process.env.NODE_ENV === 'production' ? process.env.DATA_BASE_PROD : process.env.DATA_BASE;
console.log('url db ', url);
module.exports = {
  connection: () => {
    mongoose.connect(url, {
      keepAlive: 'true',
      connectTimeoutMS: 30000,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      autoIndex : true,
    }).catch(error => console.log(error, 'ERROR CONNECTION'));
  }
};
