import api from "./api";

class AuthService {
  login(credentials) {
    return api.post(
      "/auth/login",
      credentials
    );
  }

  logout() {
    localStorage.removeItem("token");
  }

  profile() {
    return api.get("/auth/profile");
  }

  refresh() {
    return api.post(
      "/auth/refresh"
    );
  }
}

export default new AuthService();