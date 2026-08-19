INSERT INTO platform.users (
    email,
    password_hash,
    full_name,
    role
)
VALUES
(
    'admin@platform.ai',
    crypt('password123', gen_salt('bf')),
    'Platform Admin',
    'admin'
),
(
    'demo@platform.ai',
    crypt('password123', gen_salt('bf')),
    'Demo User',
    'user'
);