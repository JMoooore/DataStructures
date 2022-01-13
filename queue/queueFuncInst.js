//First in first out
let Queue = function() {
    const queue = {}
    queue.items = 0;
    queue.first = 0;

    queue.enqueue = function(string) {
        queue[queue.items++] = string
    }

    queue.dequeue = function() {
        let temp = queue[queue.first];
        delete queue[queue.first++];
        queue.items --
        return temp
    }

    queue.size = function() {
        return queue.items
    }

    return queue
}

const newQueue = Queue()
newQueue.enqueue("one")
newQueue.enqueue("two")
newQueue.enqueue("three")
newQueue.enqueue("four")

console.log(newQueue);
console.log(newQueue.dequeue())
console.log(newQueue.size());
