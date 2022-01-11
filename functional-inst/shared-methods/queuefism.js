//First in first out
const Queue = function() {
    const queue = {}
    queue.items = 0
    queue.first = 0
    Object.assign(queue, methods)
    return queue
}

const methods = {
    enqueue : function(string) {
        this[this.items++] = string
    },

    dequeue : function() {
        let temp = this[this.first];
        delete this[this.first++];
        this.items --
        return temp
    },

    size : function() {
        return this.items
    }

}


const newQueue = Queue()
newQueue.enqueue("one")
newQueue.enqueue("two")
newQueue.enqueue("three")
newQueue.enqueue("four")

console.log(newQueue);
console.log(newQueue.dequeue())
console.log(newQueue.size());