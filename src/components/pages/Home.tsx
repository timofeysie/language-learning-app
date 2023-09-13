import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
    return (
        <div>
            <h1>Chapter List</h1>
            <ul>
                <li>
                    <Link to="/chapter/chapter26">Chapter 26</Link>
                </li>
                <li>
                    <Link to="/chapter/chapter27">Chapter 27</Link>
                </li>
            </ul>
        </div>
    );
};

export default Home;
