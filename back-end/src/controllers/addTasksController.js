const { addTaskService } = require("../services/addTasksService");

exports.addTasksController = (req, res) => {

    try {
        const task = addTaskService(req.body);
        res.status(201).json(task);
        
    } catch (error) {
        console.log(error);
    }
};