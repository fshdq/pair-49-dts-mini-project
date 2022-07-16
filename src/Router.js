import {Routes, Route} from "react-router-dom";
import App from "./App";
import Invoices from "./routes/invoices";
import Query from "./routes/query";

export default function Router(){

    return(
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/invoices" element={<Invoices />} />
            <Route path="/query" element={<Query />} />
        </Routes>
    )
}