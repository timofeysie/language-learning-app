import React, { useState } from "react";
import {
    Button,
    Container,
    Grid,
    IconButton,
    Paper,
    Typography,
} from "@mui/material";
import {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    Create as CreateIcon,
    ChromeReaderMode as ReadingIcon,
    AutoStories as WritingIcon,
    RecordVoiceOver as SpeakingIcon,
    Hearing as ListeningIcon,
} from "@mui/icons-material";
import ViewQuiltIcon from "@mui/icons-material/ViewQuilt";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import "./ExerciseComponent.css";

const ExerciseComponent: React.FC = () => {
    const [selectedTab, setSelectedTab] = useState<string>("pattern");
    const [selectedExerciseType, setSelectedExerciseType] =
        useState<string>("reading");

    const handleContentChange = (tab: string) => {
        setSelectedTab(tab);
    };

    const handleExerciseTypeChange = (exerciseType: string) => {
        setSelectedExerciseType(exerciseType);
    };

    const handleStartExercise = () => {
        console.log(`Starting ${selectedExerciseType} exercise on ${selectedTab}.`);
        const studyList = loadStudyListObjects();
        console.log('studyList', studyList)
    };

    const loadStudyListObjects = () => {
        const studyListObjects = localStorage.getItem('studyListObjects');
        return studyListObjects ? JSON.parse(studyListObjects) : [];
    }

    return (
        <Container maxWidth="md" sx={{ margin: "6px"}}>
            <Paper elevation={3} style={{ padding: "16px" }}>
                <Grid container spacing={2}>
                    {/* Exercise content choice */}
                    <Grid item xs={12}>
                        <Typography variant="h5">
                            Choose what to practice:
                        </Typography>
                        <div>
                        <IconButton style={{borderRadius: 0}}
                                onClick={() => handleContentChange("book")}
                                className={`icon-button ${
                                    selectedTab === "book" ? "selected-tab" : ""
                                }`}
                            >
                                <span className="icon-span">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        x="0px"
                                        y="0px"
                                        viewBox="0 0 256 256"
                                        className={`icon-svg ${
                                            selectedTab === "book"
                                                ? "selected-icon"
                                                : ""
                                        }`}
                                    >
                                        <path
                                            fill={
                                                selectedTab === "book"
                                                    ? "primary"
                                                    : "default"
                                            }
                                            d="M221.3,239.9c-0.1-0.1-14.3-15.3-14.3-32.7c0-17.1,11.2-26.6,11.7-27c0.3-0.2,0.5-0.5,0.7-0.9c0.2,0,0.4,0,0.6,0.1v-1.5c0-0.1,0-0.2,0-0.3v-8.2l0,0c0-0.7-0.1-2.2-0.1-3.2V18.2l0.1-6.5V10h-4.4H72.8C52.7,10,35,25.9,34.1,45.7c0,0.6-0.2,1.1-0.2,1.7c0,0.6,0.1,1.1,0.2,1.7l-0.4,147.5l0,11c0,21.2,17.2,38.3,38.3,38.3c0,0,112.7,0,146.1,0c0,0,0,0,0,0c-8.3,0-16.2,0,0.1,0c0.1,0,0.2,0,0.3,0c0.1,0,0.2,0,0.4,0c0.4,0,0.7,0,1.1,0v0c-0.4,0-0.7,0-1,0h0c0.3,0,0.7,0,1,0l-0.1-0.2c0.4-0.2,0.8-0.4,1.2-0.7C222.6,243.7,222.7,241.4,221.3,239.9z M100.4,34.9h83.1v27.4h-83.1V34.9z M56,207.6c0-14,11.4-25.5,25.5-25.5h119.4c-3.8,4.6-9,13-9,25.1c0,10.4,4.5,19.6,8.5,25.7c-29.4,0-118.9,0.2-118.9,0.2C67.4,233.1,56,221.7,56,207.6z"
                                        />
                                    </svg>
                                </span>
                                <Typography color={
                                    selectedTab === "book"
                                        ? "primary"
                                        : "default"
                                }>Book (all) </Typography>
                            </IconButton>

                            <IconButton style={{borderRadius: 0}}
                                onClick={() => handleContentChange("chapter")}
                                color={
                                    selectedTab === "chapter"
                                        ? "primary"
                                        : "default"
                                }
                                className={
                                    selectedTab === "chapter"
                                        ? "selected-icon-button"
                                        : ""
                                }
                            >
                                <CollectionsBookmarkIcon />
                                <Typography ml={1}>Chapter</Typography>
                            </IconButton>


                            <IconButton style={{borderRadius: 0}}
                                onClick={() => handleContentChange("pattern")}
                                color={
                                    selectedTab === "pattern"
                                        ? "primary"
                                        : "default"
                                }
                                className={
                                    selectedTab === "pattern"
                                        ? "IconButton"
                                        : ""
                                }
                            >
                                <ViewQuiltIcon />
                                <Typography ml={1}>Pattern</Typography>
                            </IconButton>

                            <IconButton style={{borderRadius: 0}}
                                onClick={() => handleContentChange("vocab")}
                                color={
                                    selectedTab === "vocab"
                                        ? "primary"
                                        : "default"
                                }
                                className={
                                    selectedTab === "vocab"
                                        ? "IconButton"
                                        : ""
                                }
                            >
                                <FormatListBulletedIcon />
                                <Typography ml={1}>Vocab</Typography>
                            </IconButton>
                        </div>
                    </Grid>

                    {/* Excercise type */}
                    <Grid item xs={12}>
                        <Typography variant="h5">
                            Choose an Exercise Type:
                        </Typography>
                        <div>
                            <IconButton style={{borderRadius: 0}}
                                onClick={() =>
                                    handleExerciseTypeChange("reading")
                                }
                                color={
                                    selectedExerciseType === "reading"
                                        ? "primary"
                                        : "default"
                                }
                            >
                                <IconButton style={{borderRadius: 0}}
                                    color={
                                        selectedExerciseType === "reading"
                                            ? "primary"
                                            : "default"
                                    }
                                >
                                    <ReadingIcon />
                                </IconButton>
                                <Typography ml={1}>Reading</Typography>
                            </IconButton>
                            <IconButton style={{borderRadius: 0}}
                                onClick={() =>
                                    handleExerciseTypeChange("writing")
                                }
                                color={
                                    selectedExerciseType === "writing"
                                        ? "primary"
                                        : "default"
                                }
                            >
                                <IconButton style={{borderRadius: 0}}
                                    color={
                                        selectedExerciseType === "writing"
                                            ? "primary"
                                            : "default"
                                    }
                                >
                                    <WritingIcon />
                                </IconButton>
                                <Typography ml={1}>Writing</Typography>
                            </IconButton>
                            <IconButton style={{borderRadius: 0}}
                                onClick={() =>
                                    handleExerciseTypeChange("speaking")
                                }
                                color={
                                    selectedExerciseType === "speaking"
                                        ? "primary"
                                        : "default"
                                }
                                disabled
                            >
                                <IconButton
                                    color={
                                        selectedExerciseType === "speaking"
                                            ? "primary"
                                            : "default"
                                    }
                                >
                                    <SpeakingIcon />
                                </IconButton>
                                <Typography ml={1}>Speaking</Typography>
                            </IconButton>
                            <IconButton style={{borderRadius: 0}}
                                onClick={() =>
                                    handleExerciseTypeChange("listening")
                                }
                                color={
                                    selectedExerciseType === "listening"
                                        ? "primary"
                                        : "default"
                                }
                                disabled
                            >
                                <IconButton
                                    color={
                                        selectedExerciseType === "listening"
                                            ? "primary"
                                            : "default"
                                    }
                                >
                                    <ListeningIcon />
                                </IconButton>
                                <Typography ml={1}>Listening</Typography>
                            </IconButton>
                        </div>
                    </Grid>

                    {/* Primary action button */}
                    <Grid item xs={12}>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleStartExercise}
                        >
                            Start Exercise
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
};

export default ExerciseComponent;
