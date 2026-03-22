import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/style.css";
import Home from "./pages/landing/Home";
import Register from "./pages/landing/Registration";
import Login from "./pages/landing/Login";
import ProtectedRoute from "./hoc/ProtectedRoute";
import Layout from "./layout/layout";
import Dashboard from "./pages/landing/Dashboard";

function App() {
  return (
    <>
      <div className="container-fluid">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Layout>
                    <Dashboard />
                  </Layout>
                </ProtectedRoute>
              }
            />
            ; ;
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
