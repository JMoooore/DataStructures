//Stack is first in last out
class Stack {
    constructor() {
        this.stack = {}
        this.items = 0
    }

    push(string) {
        //Adds one to items after utilizing it
        this.stack[this.items++] = string
        //this.first is already 0 so we don't need to change it    
    }

    pop() {
        if (this.items === 0) {
            return null
        }
        //Set variable as the item that is being taken off
        let temp = this.stack[this.items - 1]
        delete(this.stack[this.items - 1])
        //Decrement this.items since the last item was popped off
        this.items --
        return temp
    }

    size() {
        return this.items
    }
}
