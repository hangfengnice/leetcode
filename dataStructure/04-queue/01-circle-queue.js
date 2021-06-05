class CircularQueue {
  constructor(capacity) {
    this.items = [];
    this.n = capacity;
    this.head = 0;
    this.tail = 0;
  }

  enqueue(item) {
    let { tail, head, items, n } = this;
    if ((tail + 1) % n === head) return false;
    items[tail] = item;
    this.tail = (tail + 1) % n;
    return true;
  }
  dequeue() {
    let { tail, head, items, n } = this;
    if (head == tail) return null;

    let res = items[head];
    this.head = (head + 1) % n;
    return res;
  }
}

let queue = new CircularQueue(4)


queue.enqueue(1)

queue.enqueue(2)

console.log(queue);
