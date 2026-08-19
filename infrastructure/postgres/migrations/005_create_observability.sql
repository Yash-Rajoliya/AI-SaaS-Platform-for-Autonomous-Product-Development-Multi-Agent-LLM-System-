CREATE TABLE observability.metrics (
    id BIGSERIAL PRIMARY KEY,
    service_name VARCHAR(255),
    metric_name VARCHAR(255),
    metric_value DOUBLE PRECISION,
    labels JSONB,
    collected_at TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX idx_metrics_service
ON observability.metrics(service_name);

CREATE INDEX idx_metrics_time
ON observability.metrics(collected_at);