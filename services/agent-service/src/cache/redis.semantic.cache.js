export class RedisSemanticCache {
  constructor(redisClient) {
    this.redis = redisClient;
  }

  async get(key) {
    const value =
      await this.redis.get(key);

    return value
      ? JSON.parse(value)
      : null;
  }

  async set(
    key,
    value,
    ttl = 3600,
  ) {
    await this.redis.set(
      key,
      JSON.stringify(value),
      {
        EX: ttl,
      },
    );
  }

  async delete(key) {
    await this.redis.del(key);
  }
}