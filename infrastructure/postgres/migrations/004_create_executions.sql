CREATE TABLE platform.executions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    project_id UUID REFERENCES platform.projects(id),
    agent_id UUID REFERENCES platform.agents(id),
    status VARCHAR(50),
    started_at TIMESTAMPTZ,
    completed_at TIMESTAMPTZ,
    execution_metadata JSONB,
    created_at TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX idx_execution_project
ON platform.executions(project_id);