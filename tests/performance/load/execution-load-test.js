import http from "k6/http";

export const options = {
  vus: 50,
  duration: "5m",
};

export default function () {
  http.post(
    "http://localhost:3000/executions",
    JSON.stringify({
      task: "generate",
    }),
  );
}