import express from 'express';
import cors from 'cors';
import mongoose from './db/dbConnection.js';
import router from './routes/routes.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// CORS middleware setup
const allowedOrigins = [
  'http://localhost:5173',
  'http://127.0.0.1:5173',
  'http://localhost:5176',
  'http://127.0.0.1:5173',
  'https://backend.testing4.xyz/',
  'http://backend.testing4.xyz/',
];

const corsOptions = {
  origin: function (origin, callback) {
    if (
      !origin ||
      allowedOrigins.includes(origin) ||
      process.env.NODE_ENV === 'development'
    ) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions));
app.get('/', (req, res) => {
  res.status(200).json('Service started');
});

// middlewares
app.use(express.json());

app.use(router);
app.use(express.static('uploads'));
app.set('view engine', 'ejs');

// Catch-all for invalid routes
app.use('*', (req, res) => {
  console.log('invalid link');
  res.status(404).send('Invalid link');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`app is running @ http://localhost:${PORT}/`);
});
