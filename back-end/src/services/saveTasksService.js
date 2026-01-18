const fs = require("fs")
const path = require("path");
const FILE = path.join(__dirname, "../util/tasks.json");

exports.saveTasksService = (data) => {
    fs.writeFileSync(FILE, JSON.stringify(data, null, 2));
};