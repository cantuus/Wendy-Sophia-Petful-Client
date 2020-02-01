class _Node {
    constructor(data, next, prev = null) {
        this.data = data;
        this.next = next;
        this.prev = prev;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
    }
    enqueue(data) {
        const newNode = new _Node(data, null);
        if (this.first === null) {
            this.first = newNode;
            this.last = this.first;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
    }
    dequeue() {
        if (this.first === null) {
            return 'empty queue';
        }
        const firstNode = this.first;
        this.first = firstNode.next;
        if (firstNode === this.last) {
            this.last = null;
            this.first = null;
        }
        firstNode.next = null;
        return firstNode.data;
    }
    size() {
        let currNode = this.first;
        let counter = 0;
        while (currNode !== null) {
            currNode = currNode.next;
            counter++;
        }
        return counter;
    }
    getStr() {
        let currNode = this.first;
        let str = 'first: ';
        while (currNode !== null) {
            str = str + currNode.data + ', ';
            currNode = currNode.next;
        }
        str = str.slice(0, -2);
        return str;
    }
    display() {
        let currNode = this.first;
        let str = 'first: ';
        while (currNode !== null) {
            str = str + currNode.data + ', ';
            currNode = currNode.next;
        }
        str = str.slice(0, -2);
        // console.log(str);
    }
    peek() {
        return this.first.data;
    }
    isEmpty() {
        return this.first === null;
    }
}

let adoptionQueue = new Queue();

let namesList = ['Mason, Wendy, Michael, Christina, Austin'];

adoptionQueue.enqueue('Mason');
adoptionQueue.enqueue('Wendy');
adoptionQueue.enqueue('Michael');
adoptionQueue.enqueue('Christina');
adoptionQueue.enqueue('Austin');

export {
    Queue,
    _Node,
    adoptionQueue,
    namesList
};
