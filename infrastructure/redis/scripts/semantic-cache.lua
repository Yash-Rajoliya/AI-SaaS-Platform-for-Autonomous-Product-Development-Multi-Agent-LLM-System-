local cacheKey = KEYS[1]
local value = ARGV[1]
local ttl = tonumber(ARGV[2])

local existing = redis.call("GET", cacheKey)

if existing then
    return existing
end

redis.call(
    "SET",
    cacheKey,
    value,
    "EX",
    ttl
)

return value