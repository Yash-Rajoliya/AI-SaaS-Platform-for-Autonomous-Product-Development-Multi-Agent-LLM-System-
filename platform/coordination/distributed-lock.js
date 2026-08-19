export class DistributedLock {
  constructor() {
    this.locks = new Map();
  }

  acquire(key, owner) {
    if (this.locks.has(key)) {
      return false;
    }

    this.locks.set(key, owner);

    return true;
  }

  release(key) {
    return this.locks.delete(key);
  }
}