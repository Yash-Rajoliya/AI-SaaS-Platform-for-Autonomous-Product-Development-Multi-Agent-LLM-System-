export class DeadLetterQueue {
  constructor() {
    this.messages = [];
  }

  push(message) {
    this.messages.push(message);
  }

  drain() {
    return this.messages.splice(0);
  }
}