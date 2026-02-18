const express = require('express');
const router = express.router();
const addController = require('/controller/add.controllers');
const authMiddleware = require('/middleware/authMiddleware');
router.post('/task/add', authMiddleware, addController.addTask);
module.exports.router;