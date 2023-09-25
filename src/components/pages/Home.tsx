import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import chapterMapping, { bookTitle } from "../data/chapterMapping";
import "./ChapterPage.css";
import { ChapterData } from "../../types/ChapterData";
import { generateStudyListObjects } from "../../utils/generateStudyListObjects";
import { fetchData } from "../../utils/fetchChapter";
import categoryMapping from "../data/categoryMapping";

const Home: React.FC = () => {
    const studyListObjectsExist = (): boolean => {
        // Check if at least one study list object exists in local storage
        return Object.keys(localStorage).some((key) => key.startsWith("0-"));
    };

    useEffect(() => {
        if (!studyListObjectsExist()) {
            console.log("!studyListObjectsExist, creating new list objects");
            fetchChapterData();
        } else {
            console.log("studyListObjectsExist");
        }
    }, []);

    const fetchChapterData = async () => {
      try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        chapterMapping.map(async (chapter: any) => {
          const chapterData = await fetchData(chapter.file);
          if (chapterData) {
            initializeStudyListObjects(chapterData);
          }
          return chapterData;
        });
    
      } catch (error) {
        console.error('Error fetching chapter data:', error);
      }
    };
    

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const initializeStudyListObjects = (data: ChapterData) => {
        const studyList = generateStudyListObjects(data);
        studyList.forEach((studyObj) => {
            console.log("studyobj", studyObj);
            localStorage.setItem(
                `${categoryMapping[0].id}-${studyObj.chapterId}-${studyObj.contentType}-${studyObj.contentId}`,
                JSON.stringify(studyObj)
            );
        });
    };

    return (
        <div>
            <Typography variant="h1" mb={2}>
                {bookTitle}
            </Typography>
            {chapterMapping.map((chapter) => (
                <Typography key={chapter.title} variant="body1">
                    <Link to={`/chapter/${chapter.link}/${categoryMapping[0].id}`}>{chapter.title}</Link>
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
