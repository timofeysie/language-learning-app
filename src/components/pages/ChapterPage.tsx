import React, { useEffect, useState } from "react";
import chapterMapping from "../data/chapterMapping";
import DialogComponent from "../../features/Dialog/DialogComponent";
import { useParams, Link } from "react-router-dom";
import VocabularyComponent from "../../features/Vocabulary/VocabularyComponent";
import PatternComponent from "../../features/Patterns/PatternComponent";
import { ChapterData } from "../../types/ChapterData";
import { Typography, useMediaQuery, useTheme } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import ViewQuiltIcon from "@mui/icons-material/ViewQuilt";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import ExerciseComponent from "../../features/Exercises/ExerciseComponent";
import "./ChapterPage.css";

const ChapterPage: React.FC = () => {
    const { filename } = useParams();
    const [chapterData, setChapterData] = useState<ChapterData | null>(null);
    const [resetExercise, setResetExcercise] = useState<boolean>(false); 

    useEffect(() => {
        if (filename) {
            const chapterInfo = chapterMapping.find(
                (info) => info.link === filename
            );

            if (chapterInfo) {
                const dataUrl = `/${chapterInfo.file}`;
                fetch(dataUrl)
                    .then((response) => {
                        if (!response.ok) {
                            throw new Error(
                                `Failed to fetch data for ${filename}`
                            );
                        }
                        return response.json();
                    })
                    .then((data) => {
                        setChapterData(data);
                    })
                    .catch((error) => {
                        console.error(
                            `Error loading chapter data for ${filename}:`,
                            error
                        );
                    });
            }
        }
    }, [filename, chapterMapping]);

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const [tabValue, setTabValue] = useState(1);

    /* tslint:disable:no-unused-variable */
    const handleTabChange = (
        _event: React.SyntheticEvent,
        newValue: number
    ) => {
        setTabValue(newValue);
        setResetExcercise(true);
    };

    if (!chapterData) {
        return (
            <>
                <Link to="/">Home</Link>
                <div>Loading...</div>
            </>
        );
    }

    const tabLabelStyle = {
        minWidth: "20%",
    };

    return (
        <div className="chapter-page">
            {isMobile ? (
                <Tabs
                    className="top"
                    value={tabValue}
                    onChange={handleTabChange}
                    aria-label="icon tabs example"
                >
                    <Tab
                        sx={tabLabelStyle}
                        icon={<MeetingRoomIcon />}
                        component={Link}
                        to="/"
                        aria-label="home"
                    />
                    <Tab
                        sx={tabLabelStyle}
                        icon={<QuestionAnswerIcon />}
                        aria-label="dialog"
                    />
                    <Tab
                        sx={tabLabelStyle}
                        icon={<FormatListBulletedIcon />}
                        aria-label="vocabulary"
                    />
                    <Tab
                        sx={tabLabelStyle}
                        icon={<ViewQuiltIcon />}
                        aria-label="pattern"
                    />
                    <Tab
                        sx={tabLabelStyle}
                        icon={<FitnessCenterIcon />}
                        aria-label="exercises"
                    />
                </Tabs>
            ) : (
                <div style={{ display: "flex" }}>
                    <Tabs
                        sx={{ overflow: "visible" }}
                        orientation="vertical"
                        variant="scrollable"
                        value={tabValue}
                        onChange={handleTabChange}
                        aria-label="vertical tabs example"
                    >
                        <Tab
                            label="Home"
                            icon={<MeetingRoomIcon />}
                            component={Link}
                            to="/"
                        />
                        <Tab label="Dialog" icon={<QuestionAnswerIcon />} />
                        <Tab
                            label="Vocabulary"
                            icon={<FormatListBulletedIcon />}
                        />
                        <Tab label="Pattern" icon={<ViewQuiltIcon />} />
                        <Tab label="Exercises" icon={<FitnessCenterIcon />} />
                    </Tabs>
                    <div className="content">
                        <Typography variant="h2">
                            Chapter {chapterData.chapter}
                        </Typography>
                        <Typography variant="h3">
                            {chapterData.titleTarget}
                        </Typography>
                        <Typography variant="h4">
                            {chapterData.titleNative}
                        </Typography>

                        {tabValue === 0 && (
                            <Link to="/">Home Page Content</Link>
                        )}
                        {tabValue === 1 && (
                            <DialogComponent dialog={chapterData.dialog} />
                        )}
                        {tabValue === 2 && (
                            <VocabularyComponent
                                vocabulary={chapterData.vocabulary}
                                chapterId={chapterData.id}
                            />
                        )}
                        {tabValue === 3 && (
                            <PatternComponent patterns={chapterData.patterns} />
                        )}
                        {tabValue === 4 && (
                            <ExerciseComponent chapterId={chapterData.id} reset={resetExercise} />
                        )}
                    </div>
                </div>
            )}
            {isMobile && (
                <div className="mobile-layout">
                    {tabValue === 0 && <Link to="/">Home Page Content</Link>}
                    {tabValue === 1 && (
                        <DialogComponent dialog={chapterData.dialog} />
                    )}
                    {tabValue === 2 && (
                        <VocabularyComponent
                            vocabulary={chapterData.vocabulary}
                            chapterId={chapterData.id}
                        />
                    )}
                    {tabValue === 3 && (
                        <PatternComponent patterns={chapterData.patterns} />
                    )}
                    {tabValue === 4 && (
                        <ExerciseComponent chapterId={chapterData.id}  reset={resetExercise} />
                    )}
                </div>
            )}
        </div>
    );
};

export default ChapterPage;
