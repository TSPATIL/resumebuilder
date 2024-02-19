const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectToMongoDB = require('./db');

connectToMongoDB();
const app = express();

dotenv.config();

const port = 5000 || process.env.PORT_BACKEND;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: true}));

app.listen(port, () => {
    console.log(`ResumeBuilder app listening at http://127.0.0.1:${port}`);
});