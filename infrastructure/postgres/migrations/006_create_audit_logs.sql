CREATE TABLE audit.audit_logs (
    id BIGSERIAL PRIMARY KEY,
    actor_id UUID,
    action VARCHAR(255),
    resource_type VARCHAR(255),
    resource_id UUID,
    details JSONB,
    created_at TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX idx_audit_actor
ON audit.audit_logs(actor_id);

CREATE INDEX idx_audit_time
ON audit.audit_logs(created_at);