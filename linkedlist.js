class Node {
    constructor(data, next) {
        this.data = data
        this.next = next

        // THROW error if...
        // "next" is not an instance of class "Node", AND
        // "next" is NOT undefined
        if (next instanceof Node === false && next !== undefined) {
            throw new Error('not a node')
        }
    }
}

class LinkedList {
    constructor() {
        this.list = []
    }

    getList() {
        return this.list
    }

    getSize() {
        return this.list.length
    }

    getFirst() {
        return this.list[0] === undefined ? null : this.list[0]
    }

    unshift(item) {
        if (item instanceof Node === false) {
            throw new Error('not a node')
        } else if (this.list.length === 0) {
            this.list.unshift(item)
        } else {
            const oldFirst  = this.getFirst()
            this.list.unshift(item)
            this.getFirst().next = oldFirst
        }
    }

    shift() {
        return this.list.length === 0 ? null : this.list.shift()
    }

    getLast() {
        return this.list.length === 0 ? null : this.list[this.list.length - 1]
    }

    pop() {
        return this.list.length === 0 ? null : this.list.pop()
    }

    push(item) {
        if (item instanceof Node === false) {
            throw new Error('not a node')
        } else {
            return this.list.push(item)
        }
    }

    getAt(position) {
        if (typeof position !== 'number') {
            throw new Error('not a number')
        } else if (this.list.length === 0) {
            return null
        } else if (position >= this.list.length || position < 0) {
            throw new Error('index out of bound')
        } else {
        return this.list[position]
        }
    }

    insertAt(position, newNode) {
        if (typeof position !== 'number') {
            throw new Error('not a number')
        } else if (newNode instanceof Node === false) {
            throw new Error('not a node')
        } else if (position > this.list.length || position < 0) {
            throw new Error('index out of bound')
        } else if (this.list.length === 0) {
            this.list[0] = newNode
        } else {
            // store node that's moving (and all its links) as storedNodes
            const storedNodes = this.list[position]
            
            // replace storedNodes with incoming node
            this.list[position] = newNode
            
            // position storedNodes in front of newNode
            this.list[position + 1] = storedNodes
            
            // reconnect newNode to storedNodes
            newNode.next = storedNodes
        }
    }

    removeAt(position) {
        if (this.getSize() === 0 && position === 0) {
            return null
        } else if (position < 0 || position >= this.list.length) {
            throw new Error("index out of bound")
        } else if (position === 0) {
            return this.list.shift()
        } else {
            const removed = this.list[position]
            this.list[position] = this.list[position].next
            return removed
        }
    }
}

// list = new LinkedList()
// const nodeA = new Node("apple");
// const nodeB = new Node("banana");
// const nodeC = new Node("canana");
// const nodeD = new Node("danana");
// list.insertAt(0, nodeA)
// list.insertAt(1, nodeB)
// list.insertAt(2, nodeC)
// list.insertAt(3, nodeD)
// list.insertAt(0, nodeB)
// list.insertAt(1, nodeB)
// list.insertAt(2, nodeC)
// list.insertAt(3, nodeD)
// list.insertAt(0, nodeB)
// console.log(list)

module.exports = { Node, LinkedList }

/* 
a linked list is: 
    - a linear data structure
    - has elements that are not stored
    at contiguous memory locations
    - consist of nodes where each node contains
        - a data field
        - a reference to the next node in
        the list
*/
