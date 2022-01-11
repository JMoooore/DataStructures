//Queue is first in first out
class Queue {
    constructor() {
        this.queue = {}
        this.items = 0
        this.first = 0
    }

    enqueue(string) {
        //Adds one to items after utilizing it
        this.queue[this.items++] = string
        //this.first is already 0 so we don't need to change it with first in first out    
    }

    dequeue() {
        if (this.items === 0) {
            return null
        }
        //Set variable as the item that is being taken off
        let temp = this.queue[this.first]
        //Increment this.first after deleting the first variable in the object
        delete(this.queue[this.first++])
        this.items --

        //Could reset this.first to 0 when the object is empty but why?
        return temp
    }

    size() {
        return this.items
    }
}