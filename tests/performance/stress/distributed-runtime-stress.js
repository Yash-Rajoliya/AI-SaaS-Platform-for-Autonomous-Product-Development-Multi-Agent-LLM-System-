export async function runStress() {
  for (let i = 0; i < 100000; i++) {
    JSON.stringify({
      iteration: i,
    });
  }
}