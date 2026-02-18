const express = require('express');
const router = express.router();
const editController = require('/controller/edit.controllers');
const authMiddleware = require('/middleware/authMiddleware');

router.put('/task/:id/edit', authMiddleware, editController.editTask);
module.exports.router;

router.put('/task/:id/mark', authMiddleware, editController.markTask);
module.exports.router;

router.put('/user/:id/editprofile', authMiddleware, editController.editprofile);
module.exports.router;

router.delete('/user/:id/deleteprofile', authMiddleware, editController.deleteprofile);
module.exports.router;