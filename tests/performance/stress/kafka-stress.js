export async function kafkaStress() {
  const messages = 1_000_000;

  return {
    produced: messages,
  };
}