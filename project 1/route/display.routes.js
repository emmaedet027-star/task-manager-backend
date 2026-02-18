const express = require('express');
const router = express.router();
const displayController = require('/controller/display.controllers');
const authMiddleware = require('/middleware/authMiddleware');
router.get('/task/user/:id', authMiddleware, displayController.displayTask);
module.exports.router;