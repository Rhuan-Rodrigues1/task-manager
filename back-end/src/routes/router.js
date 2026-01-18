const express = require('express');
const { readTaskController } = require("../controllers/readTasksController");
const { addTasksController } = require('../controllers/addTasksController');

const router = express.Router();

router.get('/read', readTaskController);
router.post('/add', addTasksController);

module.exports = { router };