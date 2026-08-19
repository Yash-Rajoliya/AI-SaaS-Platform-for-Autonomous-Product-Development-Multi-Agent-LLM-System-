export class EventReplay {
  replay(events, handler) {
    return events.map(handler);
  }
}