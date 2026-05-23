const express = require('express');
const projects = require('./projects');
const profile = require('./profile');
const contact = require('./contact');

const router = express.Router();

router.use('/projects', projects);
router.use('/profile', profile);
router.use('/contact', contact);

module.exports = router;
