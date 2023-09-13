import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/pages/Home";
import ChapterPage from "./components/pages/ChapterPage";

const RoutesConfig: React.FC = () => {
    return (
        <Router>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/chapter/:filename" element={<ChapterPage />} />
            </Routes>
        </Router>
    );
};

export default RoutesConfig;
