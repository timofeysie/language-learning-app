import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import chapterMapping from "../data/chapterMapping"; // Import the modified chapter mapping

const Home: React.FC = () => {
  return (
    <div>
      <Typography variant="h1">Chapter List</Typography>
      <ul>
        {chapterMapping.map((chapter) => (
          <li key={chapter.link}>
            <Link to={`/chapter/${chapter.link}`}>{chapter.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
