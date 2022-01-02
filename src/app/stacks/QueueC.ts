export interface IQueueC<T> {
  enqueue(item: T): void;
  dequeue(): T | undefined;
  size(): number
}

export class QueueCollection<T> extends Collection<T> implements IQueueC<T> {
  constructor(private capacity: number) { super() }


  public enqueue = (item: T): void => {
    if (this.isFull()) {
      throw Error("Too big, fatso!")
    }
    this.storage.push(item)
  }

  dequeue(): T | undefined {
    return this.storage.shift()
  }

  size(): number {
    return this.storage.length
  }

  isFull(): boolean {
    return this.capacity === this.size()
  }

  isEmpty(): boolean {
    return this.size() === 0;
  }

}
