const express = require('express');
const { readTaskController } = require("../controllers/readTasksController");
const { addTasksController } = require('../controllers/addTasksController');
const { putTasksController } = require('../controllers/putTasksController');

const router = express.Router();

router.get('/read', readTaskController);
router.post('/add', addTasksController);
router.put('/put/:id', putTasksController);

module.exports = { router };