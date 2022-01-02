export class Queue<T> implements IQueue<T>{
  private storage: T[] = [];

  constructor(private capacity: number = Infinity) { }

  enqueue(item: T): void {
    if (this.size() === this.capacity) {
      throw Error("Bad")
    }
    this.storage.push(item);
  }

  dequeue(): T {
    return this.storage.shift()
  }

  size(): number {
    return this.storage.length
  }

  isEmpty(): boolean {
    return this.size() === 0;
  }

}

interface IQueue<T> {
  enqueue(item: T): void;
  dequeue(): T;
  size(): number;
}
