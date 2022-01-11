//First in last out
class Stack {
    constructor() {
        this.stack = []
    }

    push(string) {
        this.stack.unshift(string)
    }

    pop() {
        return this.stack.shift()
    }

    size() {
        return this.stack.length
    }
}

const stack = new Stack()

stack.push('one')
stack.push('two')
stack.push('three')
stack.push('four')

console.log(stack.pop())
console.log(stack.size());
console.log(stack)