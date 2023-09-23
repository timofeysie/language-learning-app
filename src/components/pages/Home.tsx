import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import chapterMapping, { bookTitle } from "../data/chapterMapping"; // Import the modified chapter mapping
import "./ChapterPage.css";

const Home: React.FC = () => {
  return (
    <div>
      <Typography variant="h1" mb={2}>{bookTitle}</Typography>
        {chapterMapping.map((chapter) => (
            <Typography key={chapter.title} variant="body1">
              <Link to={`/chapter/${chapter.link}`}>{chapter.title}</Link>
              </Typography>
        ))}
        <div className="credit">Some icons made from <a href="https://www.onlinewebfonts.com/icon">svg icons</a> and licensed by CC BY 4.0</div>
    </div>
  );
};

export default Home;
