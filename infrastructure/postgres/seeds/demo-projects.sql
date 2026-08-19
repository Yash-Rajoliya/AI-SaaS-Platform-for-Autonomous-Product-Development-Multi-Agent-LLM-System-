INSERT INTO platform.projects (
    owner_id,
    name,
    description,
    status
)
SELECT
    id,
    'AI SaaS Demo',
    'Reference platform project',
    'active'
FROM platform.users
LIMIT 1;