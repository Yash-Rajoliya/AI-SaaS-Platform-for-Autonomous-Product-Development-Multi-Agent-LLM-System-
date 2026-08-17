import api from "./api";

class ObservabilityService {
  metrics() {
    return api.get("/metrics");
  }

  traces() {
    return api.get("/traces");
  }

  incidents() {
    return api.get("/incidents");
  }

  analytics() {
    return api.get("/analytics");
  }
}

export default new ObservabilityService();