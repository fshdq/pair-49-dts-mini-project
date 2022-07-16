import { Link } from "react-router-dom";
import Nav from "./components/Nav";

export default function App() {
  return (
    <div>
      <Nav/>
        <h1 className="text-3xl font-bold underline">
          Home
        </h1>
    </div>
  );
}