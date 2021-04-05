const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const saucesRoutes = require('./routes/sauces');
const userRoutes = require('./routes/user')
const path = require('path');
const dotenv = require('dotenv')
dotenv.config();
const helmet = require('helmet')
const configCookie = require('./middlewares/cookie-config');
const app = express();

const connectionString = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.ugpgo.mongodb.net/P6?retryWrites=true&w=majority`
mongoose.connect(connectionString)
.then(() => console.log('Connection à MongoDb réussie !'))
.catch(() => console.log('Connection à MongoDb échouée !'))


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});
app.use(helmet())
app.use(configCookie);
app.use(bodyParser.json())
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/sauces', saucesRoutes);
app.use('/api/auth', userRoutes);

module.exports = app;