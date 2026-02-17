const fs = require("fs");
const path = require("path");

const FILE = path.join(__dirname, "../util/tasks.json");

exports.load  = () => {
    if(!fs.existsSync(FILE)) {
        fs.writeFileSync(FILE, "[]");
    }

    const data = fs.readFileSync(FILE, "utf8");
    return JSON.parse(data);
}


exports.save = (data) => {
    fs.writeFileSync(FILE, JSON.stringify(data, null, 2));
}