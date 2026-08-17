import api from "./api";

class AgentService {
  list() {
    return api.get("/agents");
  }

  get(id) {
    return api.get(`/agents/${id}`);
  }

  execute(id, payload) {
    return api.post(
      `/agents/${id}/execute`,
      payload
    );
  }

  dashboard() {
    return api.get(
      "/agents/dashboard"
    );
  }
}

export default new AgentService();