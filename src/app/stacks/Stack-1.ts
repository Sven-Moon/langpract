interface IStack<T> {
  push(item: T): void;
  pop(): T | undefined;
  peek(): T | undefined;
  size(): number;
}

export class StackCollection<T> extends Collection<T> implements IStack<T> {
  constructor(private capacity: number) {
    super()
  }

  push(item: T): void {
    if (this.isFull()) {
      throw Error("Stack reached max")
    }
    this.storage.push(item)
  }

  pop(): T | undefined {
    return this.storage.pop()
  }

  peek(): T | undefined {
    return this.storage[this.size() - 1]
  }

  size(): number {
    return this.storage.length
  }

  isFull(): boolean {
    return this.capacity === this.size()
  }
}
