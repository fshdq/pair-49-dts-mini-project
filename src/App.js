import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";

import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import DetailPage from "./pages/DetailPage";

import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "components/ProtectedRoute";
import Footer from "components/Footer";
import MyList from "pages/MyList";
import Series from "pages/Series";

export default function App() {
  return (
    <>
      <AuthContextProvider>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/series" element={<Series />} />
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
            path="/my-list"
            element={
              <ProtectedRoute>
                <MyList />
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
        <Footer />
      </AuthContextProvider>
    </>
  );
}