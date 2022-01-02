
class QueueD<T> implements QueueB<T> {
  constructor() { }

  public enqueue(item: T) {
    if (!this.first) {
      this.last = new Node(item)
      this.first = this.last
    } else {
      this.last.next = new Node(item);
      this.last = this.last.next
    }
  }
}

interface QueueB<T> {
}

interface QNode<T> {
  last: QNode<T>,
  first: QNode<T>,
  next: QNode<T>
  data: T
}
