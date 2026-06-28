// the way we make this more efficient then an alternate
// version is to just let the index run forward, no need
// to reset back to 0, so the front is running, see below

export default class Queue<T> {
  items: { [key: number]: T }
  rear: number
  front: number

  constructor() {
    this.items = {}
    this.rear = 0
    this.front = 0
  }

  enqueue(element: T) {
    this.items[this.rear] = element
    this.rear++
  }

  dequeue(): T {
    const item = this.items[this.front]
    delete this.items[this.front]
    this.front++
    return item
  }

  isEmpty(): boolean {
    return this.rear - this.front === 0
  }

  peek(): T {
    return this.items[this.front]
  }

  size(): number {
    return this.rear - this.front
  }

  print() {
    console.info(this.items)
  }
}
