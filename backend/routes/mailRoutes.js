const express = require('express');
const mailController = require('../controller/contactController');
const router = express.Router();



router.post('/contact-email', mailController.sendContactEmail);



module.exports = router;
