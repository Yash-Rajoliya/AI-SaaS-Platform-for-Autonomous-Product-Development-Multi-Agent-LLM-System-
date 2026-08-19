export class StateCompression {
  compress(state) {
    return Buffer.from(
      JSON.stringify(state)
    ).toString("base64");
  }

  decompress(data) {
    return JSON.parse(
      Buffer.from(data, "base64").toString()
    );
  }
}