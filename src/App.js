import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";

import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import DetailPage from "./pages/DetailPage";

import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "components/ProtectedRoute";

export default function App() {
  return (
    <>
      <AuthContextProvider>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/details/:movieId"
            element={
              <ProtectedRoute>
                <DetailPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthContextProvider>
    </>
  );
}