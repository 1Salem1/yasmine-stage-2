const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes.js');
const stagesRoutes = require('./routes/stageRoutes.js');
const sendContactEmail = require('./routes/mailRoutes.js')
const postulerRoutes = require('./routes/postulerRoutes.js')
const cors = require('cors');
require('dotenv').config();




const app = express();

// Middleware
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));

// Routes

app.use(authRoutes);
app.use(stagesRoutes);
app.use(postulerRoutes);
app.use(sendContactEmail);

const port = process.env.PORT || 8080;
mongoose.connect("mongodb+srv://yasminbenkhedim:UOiSzTUyqp9dj4DQ@cluster0.jkmdkd8.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => console.log(error));
