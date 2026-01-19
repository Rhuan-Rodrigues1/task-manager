const { putTasksService } = require("../services/putTasksService");

exports.putTasksController = (req, res) => {
    try {
        const id = Number(req.params.id)
        const { status } = req.body
        const task = putTasksService(id, status);
        return res.status(200).json(task)
    } catch (error) {
        console.log(error);
    }
}