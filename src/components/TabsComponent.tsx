// TabsComponent idea - unused
import React from "react";
import { Link } from "react-router-dom";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import DialogComponent from "../features/Dialog/DialogComponent";
import VocabularyComponent from "../features/Vocabulary/VocabularyComponent";
import PatternComponent from "../features/Patterns/PatternComponent";
import ExerciseComponent from "../features/Exercises/ExerciseComponent";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import ViewQuiltIcon from "@mui/icons-material/ViewQuilt";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import { Typography } from "@mui/material";

interface TabsComponentProps {
    isMobile: boolean;
    tabValue: number;
    handleTabChange: (newValue: number) => void;
    chapterData: ChapterData;
}

interface ChapterData {
    chapter: number;
    titleTarget: string;
    titleNative: string;
    id: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dialog: any[]; // Replace with actual types
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    vocabulary: any[]; // Replace with actual types
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    patterns: any[]; // Replace with actual types
}

const TabsComponent: React.FC<TabsComponentProps> = ({
    isMobile,
    tabValue,
    handleTabChange,
    chapterData,
}) => {
    const tabLabelStyle = {
        minWidth: isMobile ? "20%" : undefined,
    };

    const handleTabChangeWrapper = (
        _event: React.SyntheticEvent,
        newValue: number
      ) => {
        handleTabChange(newValue);
      };

    return (
        <>
            {isMobile ? (
                <Tabs
                    className="top"
                    value={tabValue}
                    onChange={handleTabChangeWrapper}
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
                        onChange={(_event, newValue) =>
                            handleTabChange(newValue)
                        }
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
                        {isMobile && (
                            <Typography variant="h2" sx={{ fontSize: "14px" }}>
                                Chapter {chapterData.chapter}
                            </Typography>
                        )}
                        {!isMobile && (
                            <>
                                <Typography variant="h2">
                                    Chapter {chapterData.chapter}
                                </Typography>
                                <Typography variant="h3">
                                    {chapterData.titleTarget}
                                </Typography>
                                <Typography variant="h4">
                                    {chapterData.titleNative}
                                </Typography>
                            </>
                        )}
                        {tabValue === 0 && (
                            <Link to="/">Home Page Content</Link>
                        )}
                        {tabValue === 1 && (
                            <DialogComponent dialog={chapterData.dialog} />
                        )}
                        {tabValue === 2 && (
                            <VocabularyComponent
                                vocabulary={chapterData.vocabulary}
                            />
                        )}
                        {tabValue === 3 && (
                            <PatternComponent patterns={chapterData.patterns} />
                        )}
                        {tabValue === 4 && (
                            <ExerciseComponent
                                chapterId={parseInt(chapterData.id)}
                            />
                        )}
                    </div>
                </div>
            )}
            {isMobile && (
                <div className="desktop-layout">
                    {tabValue === 0 && <Link to="/">Home Page Content</Link>}
                    {tabValue === 1 && (
                        <DialogComponent dialog={chapterData.dialog} />
                    )}
                    {tabValue === 2 && (
                        <VocabularyComponent
                            vocabulary={chapterData.vocabulary}
                        />
                    )}
                    {tabValue === 3 && (
                        <PatternComponent patterns={chapterData.patterns} />
                    )}
                    {tabValue === 4 && (
                        <ExerciseComponent
                            chapterId={parseInt(chapterData.id)}
                        />
                    )}
                </div>
            )}
        </>
    );
};

export default TabsComponent;
