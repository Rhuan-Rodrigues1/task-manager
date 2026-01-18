const path = require("path");
const FILE = path.join(__dirname, "../util/tasks.json");
const fs = require("fs");

exports.readTaskService = () => {
    if (!fs.existsSync(FILE)) {
      fs.writeFileSync(FILE, "[]");
   }

   const data = fs.readFileSync(FILE, "utf8");

   if (!data) {
      return [];
   }

   const parsed = JSON.parse(data);

   if (!Array.isArray(parsed)) {
      return [];
   }

   return parsed;
};