//First in first out
class Queue {
    constructor() {
        this.queue = []
    }

    enqueue(string) {
        this.queue.push(string)
    }

    dequeue() {
        //Masking default behaviour to return null instead of undefined
        if(this.queue.length === 0) {
            return null
        }
        return this.queue.shift()
    }

    size() {
        return this.queue.length
    }
}

const queue = new Queue()

queue.enqueue('one')
queue.enqueue('two')
queue.enqueue('three')
queue.enqueue('four')

console.log(queue.dequeue())
console.log(queue.size());
console.log(queue)