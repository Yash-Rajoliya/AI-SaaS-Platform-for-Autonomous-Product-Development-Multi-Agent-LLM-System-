import api from "./api";

class ExecutionService {
  create(payload) {
    return api.post(
      "/executions",
      payload
    );
  }

  status(id) {
    return api.get(
      `/executions/${id}`
    );
  }

  logs(id) {
    return api.get(
      `/executions/${id}/logs`
    );
  }

  cancel(id) {
    return api.post(
      `/executions/${id}/cancel`
    );
  }
}

export default new ExecutionService();