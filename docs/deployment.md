# Deployment Guide

## Supported Platforms

- Kubernetes
- AWS EKS
- GKE
- AKS
- Self Hosted Kubernetes

---

## Infrastructure

Required:

- PostgreSQL
- Redis
- Kafka
- Qdrant
- Prometheus
- Grafana
- Loki
- Tempo

---

## Deployment Steps

### 1. Provision Infrastructure

terraform init
terraform apply

### 2. Install Platform

kubectl apply -f infrastructure/kubernetes

### 3. Install Istio

istioctl install

### 4. Install ArgoCD

kubectl apply -n argocd

### 5. Verify

kubectl get pods

---

## Rollback

./scripts/rollback.sh