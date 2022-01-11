class Stack {
    constructor() {
        this.head = null
        this.length = 0
    }

    push(string) {
        let temp = this.head
        const newNode = new Node(string)
        this.head = newNode
        this.head.next = temp
        this.length ++
    }

    pop() {
        if (!this.head) {
            return null
        }
        let temp = this.head
        this.head = this.head.next
        this.length --
        return temp
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

const stack = new Stack()

stack.push(11)
stack.push(22)
stack.push(33)
stack.push(44)

console.log(stack.pop());
console.log(stack);