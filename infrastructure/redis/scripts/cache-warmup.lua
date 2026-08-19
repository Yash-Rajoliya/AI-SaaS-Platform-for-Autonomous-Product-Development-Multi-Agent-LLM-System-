local keys = {
    "platform:config",
    "platform:agents",
    "platform:models",
    "platform:permissions"
}

for _, key in ipairs(keys) do
    redis.call("SET", key, "preloaded")
end

return #keys