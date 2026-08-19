CREATE TABLE platform.agents (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    type VARCHAR(100) NOT NULL,
    version VARCHAR(50),
    status VARCHAR(50),
    configuration JSONB,
    created_at TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX idx_agents_type
ON platform.agents(type);