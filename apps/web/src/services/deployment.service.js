import api from "./api";

class DeploymentService {
  list() {
    return api.get("/deployments");
  }

  create(payload) {
    return api.post(
      "/deployments",
      payload
    );
  }

  rollback(id) {
    return api.post(
      `/deployments/${id}/rollback`
    );
  }

  status(id) {
    return api.get(
      `/deployments/${id}`
    );
  }
}

export default new DeploymentService();