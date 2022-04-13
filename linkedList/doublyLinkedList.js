class DoubleLL {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    append(node) {
        if(!this.head) {
            this.head = node
            this.tail = node
        } else {
            node.prev = this.tail
            this.tail.next = node
            this.tail = node
        }
        this.length++
    }

    prepend(node) {
        if (!this.head) {
            this.head = node
            this.tail = node
        } else {
            node.next = this.head
            this.head = node
            node.next.prev = node
        }
        this.length++
    }

    insert(index) {

    }

    delete(index) {

    }

    read() {
        if (!this.head) {
            return 'its empty'
        }
        let currentNode = this.head
        let retStr = ''
        while (currentNode.next) {
            if (currentNode.prev) {
                retStr = retStr + ` ${currentNode.prev.value}`
            } else {
                retStr = retStr + 'null'
            }
            retStr = retStr + ` ${currentNode.value} ${currentNode.next.value} =>`
            currentNode = currentNode.next
        }
        retStr = retStr + ` ${currentNode.prev.value} ${currentNode.value} null`
        return retStr
    }
}

class NodeD {
    constructor(value) {
        this.value = value
        this.next = null
        this.prev = null
    }
}

const DLL = new DoubleLL()
const node1 = new NodeD(1)
const node2 = new NodeD(2)
const node3 = new NodeD(3)
const node4 = new NodeD(4)
const node5 = new NodeD(5)
// DLL.prepend(node1)
// DLL.prepend(node2)
// DLL.prepend(node3)
// DLL.prepend(node4)
// DLL.prepend(node5)
DLL.append(node1)
DLL.append(node2)
DLL.append(node3)
DLL.append(node4)
DLL.append(node5)
console.log(DLL.read());
