const express = require('express');
const router = express.router();
const deleteController = require('/controller/delete.controllers');
const authMiddleware = require('/middleware/authMiddleware');
router.delete('/task/:id/delete', authMiddleware, deleteController.eleteTask);
module.exports.router;