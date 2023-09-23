import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import chapterMapping, { bookTitle } from "../data/chapterMapping"; // Import the modified chapter mapping
import "./ChapterPage.css";
import { ChapterData } from "../../types/ChapterData";
import { generateStudyListObjects } from "../../utils/generateStudyListObjects";

const Home: React.FC = () => {
    const studyListObjectsExist = (): boolean => {
        // Check if at least one study list object exists in local storage
        return Object.keys(localStorage).some((key) => key.startsWith("0-"));
    };

    const initializeStudyListObjects = (data: ChapterData) => {
        const studyList = generateStudyListObjects(data);
        studyList.forEach((studyObj) => {
            localStorage.setItem(
                `${studyObj.chapterId}-${studyObj.contentType}-${studyObj.contentId}`,
                JSON.stringify(studyObj)
            );
        });
    };

    if (!studyListObjectsExist()) {
      console.log('!studyListObjectsExist')
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      chapterMapping.map((chapter: any) => {
        initializeStudyListObjects(chapter);
      })
    } else {
      console.log('studyListObjectsExist', studyListObjectsExist)
    }

    return (
        <div>
            <Typography variant="h1" mb={2}>
                {bookTitle}
            </Typography>
            {chapterMapping.map((chapter) => (
                <Typography key={chapter.title} variant="body1">
                    <Link to={`/chapter/${chapter.link}`}>{chapter.title}</Link>
                </Typography>
            ))}
            <div className="credit">
                Some icons made from{" "}
                <a href="https://www.onlinewebfonts.com/icon">svg icons</a> and
                licensed by CC BY 4.0
            </div>
        </div>
    );
};

export default Home;
