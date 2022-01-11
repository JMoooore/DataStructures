class Queue {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    enqueue(value) {
        const newNode = new Node(value)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length ++
    }

    dequeue() {
        let temp = this.head.value
        if (!this.head) {
            return null
        }
        if (this.head === this.tail) {
            this.tail = null
        }
        this.head = this.head.next
        this.length--
    }

    size() {
        return this.length
    }
}

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

const ll = new Queue()

ll.enqueue(11)
ll.enqueue(22)
ll.enqueue(33)
ll.enqueue(44)
ll.dequeue()
console.log(ll)