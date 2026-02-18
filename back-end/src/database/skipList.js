class Node {
    constructor(key, value, level) {
        this.key = key;
        this.value = value || [];
        this.forward = new Array(level).fill(null);
    }
}

class SkipList {
    constructor(maxLevel = 6, p = 0.5) {
        this.maxLevel = maxLevel;
        this.p = p;
        this.level = 1;
        this.header = new Node(null, null, maxLevel);
    }

    randomLevel() {
        let level = 1;
        while(Math.random() < this.p && level < this.maxLevel) {
            level++
        }
        return level;
    }

    insert(key, value) {
        const update = new Array(this.maxLevel);
        let current = this.header;
        for(let i = this.level - 1; i >= 0; i--) {
            while(current.forward[i] && current.forward[i].key < key) {
                current =  current.forward[i];
            }
            update[i] = current;
        }

        current = current.forward[0];

        if(current && current.key === key) {
            current.value.push(value);
            return;
        }

        const level = this.randomLevel();

        if(level > this.level) {
            for(let i = this.level; i < level; i++) {
                update[i] = this.header;
            }
            this.level = level
        }

        const newNode = new Node(key, [value], level);

        for(let i = 0; i < level; i++) {
            newNode.forward[i] = update[i].forward[i];
            update[i].forward[i] = newNode;
        }
    }

    search(key) {
        let current = this.header;

        for(let i = this.level - 1; i >= 0; i--) {
            while(current.forward[i] && current.forward[i].key < key) {
                current = current.forward[i];
            }
        }

        current = current.forward[0];

        if(current && current.key === key) {
            return current.values;
        }

        return [];
    }

    getAll() {
        const result = [];

        let current = this.header.forward[0];

        while(current) {
            result.push(current.value);
            current = current.forward[0];
        }

        return result;
    }

}

module.exports = SkipList;