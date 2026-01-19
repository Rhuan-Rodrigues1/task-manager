const fs = require("fs")
const path = require("path");
const FILE = path.join(__dirname, "../util/tasks.json");
const { readTaskService } = require("./readTasksService");
const { saveTasksService } = require("./saveTasksService");


exports.putTasksService = (id, status) => {
    const readTask = readTaskService();

    const task = readTask.filter((item) => item.id == id);
    task[0].status = status;
    saveTasksService(readTask);

    return task[0];
    
}