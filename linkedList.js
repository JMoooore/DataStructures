class LinkedList {
    constructor() {
        this.head = null
        this.length = 0
    }

    insertAtHead(val) {
        const newNode = new Node(val, this.head)
        this.head = newNode 
        this.length ++
    }


}

class Node {
    constructor(val, next) {
        this.val = val
        this.next = next
    }
}

const ll = new LinkedList()

ll.insertAtHead(11)
ll.insertAtHead(22)
ll.insertAtHead(33)
ll.insertAtHead(44)
