export class CacheManager {
  constructor(cacheProvider) {
    this.cache = cacheProvider;
  }

  async remember(
    key,
    callback,
  ) {
    const cached =
      await this.cache.get(key);

    if (cached) {
      return cached;
    }

    const result =
      await callback();

    await this.cache.set(
      key,
      result,
    );

    return result;
  }
}