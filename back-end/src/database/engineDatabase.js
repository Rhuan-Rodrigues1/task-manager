const SkipList = require("./SkipList");
const storage = require("./storage")

class EngineDatabase {
    constructor() {
        this.primaryIndex = new SkipList();
        this.dateIndex = new SkipList();
        this.priorityIndex = new SkipList();
        this.statusIndex = new SkipList();
        this.load();
    }

    load() {
        const  data = storage.load();

        data.forEach(record => {
            this.indexRecord(record);
        });

        console.log("Banco carregado: ", data.length);
    }

    indexRecord(record) {
        this.primaryIndex.insert(record.id, record);
        this.dateIndex.insert(record.createdAt, record);
        this.priorityIndex.insert(record.priority, record);
        this.statusIndex.insert(record.status, record);
    }

    insert(record) {
        this.indexRecord(record);
        this.persist();
    }

    findById(id){
        const result = this.primaryIndex.search(id);
        return result[0] || null;
    }

    findByPriority(priority) {
        return this.priorityIndex.search(priority);
    }

    findByStatus(status) {
        return this.statusIndex.search(status);
    }

    findAll() {
        return this.primaryIndex.getAll().flat();
    }

    persist() {
        const data = this.findAll();
        storage.save(data);
    }
}

module.exports = new EngineDatabase();