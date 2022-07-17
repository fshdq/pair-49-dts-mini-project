import Nav from "./components/Nav";
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';

export default function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </>
  );
}
