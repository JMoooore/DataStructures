//First in last out
const Stack = function() {
    const stack = {}
    stack.items = 0

    stack.push = function (string) {
        stack[stack.items++] = string
    }

    stack.pop = function() {
        //Using pre-decrement operator instead of items - 1 (because it is zero indexed) 
        //This just combines items - 1 for the index and decrementing the actual number of items
        return stack[--stack.items]
    }

    stack.size = function() {
        return stack.items
    }

    return stack
}

const newStack = Stack()
newStack.push("one")
newStack.push("two")
newStack.push("three")
newStack.push("four")

console.log(newStack);
console.log(newStack.pop())
console.log(newStack.size());
