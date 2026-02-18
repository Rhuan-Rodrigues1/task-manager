const { readTaskService } = require("./readTasksService");
const { saveTasksService } = require("./saveTasksService");
const db = require("../database/EngineDatabase");


exports.addTaskService = (data) => {
    const tasks = readTaskService();

    const newTask = {
        id: Date.now(),
        title: data.title,
        description: data.description,
        sector: data.sector,
        priority: data.priority,
        status: "Aberta",
        data: new Date().toISOString().split("T")[0]
    };

    db.insert(newTask)

    return newTask;
};