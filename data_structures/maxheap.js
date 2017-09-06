function MaxHeap() {
    this.heapQueue = [];
    this.length = 1;
}

function NewNode(msg, priority) {
  this.msg = msg;
  this.priority = priority;
}

MaxHeap.prototype.insert = function(msg, priority) {
    if (!this.heapQueue.length) this.heapQueue.push(new NewNode(msg, priority));
    const parentElementInd = Math.floor(this.length / 2);

    if (this.heapQueue[parentElementInd].priority >= priority) {
        this.heapQueue.push(new NewNode(msg, priority));
        this.length++;
    }
    else {
        var indexOfValueToReplace = parentElementInd;

        while (this.heapQueue[indexOfValueToReplace].priority < priority) {
            const temp = this.heapQueue[indexOfValueToReplace];

            this.heapQueue[indexOfValueToReplace] = new NewNode(msg, priority);
            msg = temp.msg;
            priority = temp.priority;
            indexOfValueToReplace++;
        }
        this.heapQueue.push(new NewNode(msg, priority));
    }
}

var newHeap = new MaxHeap();
newHeap.insert('hello', 20);
newHeap.insert('bye', 5);
newHeap.insert('testing',15);
newHeap.insert('jess',20);
newHeap.insert('yesss',5);
newHeap.insert('noooo',15);
newHeap.insert('puppies',20);
newHeap.insert('carts',5);
newHeap.insert('typos',15);
console.log(newHeap.heapQueue);