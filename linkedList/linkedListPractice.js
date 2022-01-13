// Do we need to return this

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0       
    }

    prepend(value) {
        const newNode = new Node(value)
        if(!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.head = newNode
        }
        this.length ++
    }

    append() {
        //Could use prepend code
        const newNode = new Node(value)
        if(!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length ++
    }
}

class Node {
    constructor(value) {
        this.value = value
        this.next = next
    }
}