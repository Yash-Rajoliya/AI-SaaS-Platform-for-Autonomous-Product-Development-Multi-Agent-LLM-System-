export class EventStream {
  constructor() {
    this.events = [];
  }

  append(event) {
    this.events.push(event);
  }

  read() {
    return [...this.events];
  }
}