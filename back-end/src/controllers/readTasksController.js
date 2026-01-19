const { readTaskService } = require("../services/readTasksService");


exports.readTaskController = (req, res) => {
    try {
        res.status(200).json(readTaskService());
    } catch (error) {
        console.log(error);
    }
};