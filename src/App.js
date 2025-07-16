import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Archive } from "./pages/Archive";
import { Important } from "./pages/Important";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/archive" element={<Archive />}></Route>
                <Route path="/important" element={<Important />}></Route>
            </Routes>
        </>
    );
}

export default App;
