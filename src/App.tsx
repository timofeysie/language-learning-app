import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./components/pages/Home";
import ChapterPage from "./components/pages/ChapterPage";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

function App() {
    return (
        <>
            <div>
                <Link to="/">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                    <img
                        src={reactLogo}
                        className="logo react"
                        alt="React logo"
                    />
                </Link>
            </div>
            <div className="card">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/chapter/:filename"
                        element={<ChapterPage />}
                    />
                </Routes>
            </div>
        </>
    );
}

export default App;
