
const keys=require('./config/keys');
const mongoose = require('mongoose');
const express = require('express');
var cors = require('cors');
const app = express();
app.use(cors());
require('./routes/index')(app);
if (!keys.jwtPrivateKey) {
  console.error('FATAL ERROR: jwtPrivateKey is not defined.');
  process.exit(1);
}
let dbUri = keys.dbhost;

const connect = (databaseUrl =dbUri) => {
  return mongoose
      .connect(databaseUrl)
      .then(() => console.log('Database connected'))
      .catch(err => console.error('Database connection failed', err));
};
connect();

app.listen(keys.port, () => console.log(`Listening on port ${keys.port}...`));