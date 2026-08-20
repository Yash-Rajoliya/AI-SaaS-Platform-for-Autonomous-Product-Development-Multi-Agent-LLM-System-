export function benchmarkThroughput() {
  const requests = 10000;
  const seconds = 10;

  return requests / seconds;
}