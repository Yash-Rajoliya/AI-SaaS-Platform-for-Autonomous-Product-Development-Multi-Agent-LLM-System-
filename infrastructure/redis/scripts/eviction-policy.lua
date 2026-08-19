local limit = tonumber(ARGV[1]) or 10000

local cursor = "0"
local removed = 0

repeat
    local result = redis.call("SCAN", cursor)
    cursor = result[1]

    local keys = result[2]

    for _, key in ipairs(keys) do
        local ttl = redis.call("TTL", key)

        if ttl == -1 then
            redis.call("EXPIRE", key, 3600)
            removed = removed + 1
        end

        if removed >= limit then
            return removed
        end
    end

until cursor == "0"

return removed