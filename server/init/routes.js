const express = require('express');

const router = express.Router();

router.get('*', (req, res) => res.render('index'));
router.get('/ping', (req, res) => res.json('Pong.'));

module.exports = router;