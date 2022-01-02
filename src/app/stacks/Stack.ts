export class Stack<T> implements IStack<T> {
  private storage: T[] = [];
  private top: number = 0;

  constructor(private capacity: number = Infinity) { }

  push(item: T): void {
    if (this.size() === this.capacity) {
      throw Error("Stack has reached max capacity. You cannot add more items.")
    };
    this.storage[this.top] = item;
    this.top += 1
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
}

export interface IStack<T> {
  push(item: T): void;
  pop(): T | undefined;
  peek(): T | undefined;
  size(): number;
}
