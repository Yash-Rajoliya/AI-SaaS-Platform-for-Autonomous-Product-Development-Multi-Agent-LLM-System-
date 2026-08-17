import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Layout from "./layout";

function Dashboard() {
  return <h1>Dashboard</h1>;
}

export default function Router() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={<Dashboard />}
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}