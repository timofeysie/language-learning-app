import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router";
import {
    Button,
    Container,
    Grid,
    IconButton,
    Paper,
    Typography,
} from "@mui/material";
import {
    RecordVoiceOver as SpeakingIcon,
    Hearing as ListeningIcon,
} from "@mui/icons-material";
import EditIcon from "@mui/icons-material/Edit";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import ViewQuiltIcon from "@mui/icons-material/ViewQuilt";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import "./ExerciseComponent.css";
import ReviewComponent from "./ReviewComponent";
import { StudyListType } from "../../types/StudyListType";
import { TestType } from "../../types/TestType";

interface ExerciseComponentProps {
    chapterId: number;
    reset: boolean;
}

const ExerciseComponent: React.FC<ExerciseComponentProps> = ({
    chapterId,
    reset,
}) => {
    const [selectedTab, setSelectedTab] = useState<string>("vocabulary");
    const [selectedExerciseType, setSelectedExerciseType] = useState<string>(
        TestType.READING
    );
    const [reviewMode, setReviewMode] = useState<boolean>(false);
    const [studyList, setStudyList] = useState<StudyListType[]>();
    const [studyObject, setStudyObject] = useState<StudyListType>();
    const studyObjectIndex = useRef<number>(0);

    const handleContentChange = (tab: string) => {
        setSelectedTab(tab);
    };

    const handleExerciseTypeChange = (exerciseType: string) => {
        setSelectedExerciseType(exerciseType);
    };

    const params = useParams();

    const handleStartExercise = () => {
        const newStudyList = loadStudyListObjects(selectedTab);
        if (newStudyList) {
            const filteredList: StudyListType[] = newStudyList.filter(
                (item: StudyListType) =>
                    item[selectedExerciseType as TestType]?.onList === true
            );
            setStudyList(filteredList);
            setStudyObject(filteredList[studyObjectIndex.current]);
            setReviewMode(true);
            reset = false;
        }
    };

    const loadStudyListObjects = (selectedTab: string) => {
        const studyListBase = `${params.book}-${chapterId}-${selectedTab}`;
        const studyListObjects =
            getLocalStorageObjectsWithPrefix(studyListBase) || "[]";
        const parsedStudyListObjects = Array.isArray(studyListObjects)
            ? studyListObjects
            : JSON.parse(studyListObjects || "[]");
        return parsedStudyListObjects || [];
    };

    const getLocalStorageObjectsWithPrefix = (prefix: string) => {
        const objects = [];
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key && key.startsWith(prefix)) {
                const item = localStorage.getItem(key);
                if (item) {
                    const object = JSON.parse(item);
                    objects.push(object);
                }
            }
        }
        return objects;
    };

    /**
     * Update the local storage with new object.
     *
     * @param updatedStudyObject StudyListType
     */
    const handleUpdate = (updatedStudyObject: StudyListType) => {
        const storageKey =
            params.book +
            "-" +
            updatedStudyObject.chapterId +
            "-" +
            updatedStudyObject.contentType +
            "-" +
            updatedStudyObject.contentId;
        try {
            const serializedUpdatedStudyObject =
                JSON.stringify(updatedStudyObject);
            localStorage.setItem(storageKey, serializedUpdatedStudyObject);
            if (
                updatedStudyObject[selectedExerciseType as TestType].onList ===
                false
            ) {
                const updatedStudyList = studyList?.filter((item, index) => {
                    if (item) {
                        return index !== studyObjectIndex.current;
                    }
                });
                setStudyList(updatedStudyList);
            }
        } catch (error) {
            console.error(
                `Error updating local storage for ${storageKey}:`,
                error
            );
        }
    };

    const handleNext = () => {
        if (studyList) {
            studyObjectIndex.current = studyObjectIndex.current + 1;
            if (studyObjectIndex.current == studyList.length) {
                // all words complete, start over
                studyObjectIndex.current = 0;
            }
            setStudyObject(studyList[studyObjectIndex.current]);
        }
    };

    // Load the initial state from local storage or set default values
    useEffect(() => {
        const storedState = localStorage.getItem("exerciseComponentState");
        if (storedState && !reset) {
            const parsedState = JSON.parse(storedState);
            setSelectedTab(parsedState.selectedTab);
            setSelectedExerciseType(parsedState.selectedExerciseType);
            setReviewMode(parsedState.reviewMode);
            setStudyList(parsedState.studyList);
            setStudyObject(parsedState.studyObject);
            studyObjectIndex.current = parsedState.studyObjectIndex;
            handleStartExercise();
            console.log("load stateToStore", parsedState);
        }
    }, []);

    // Save the state to local storage whenever it changes
    useEffect(() => {
        const stateToStore = {
            selectedTab,
            selectedExerciseType,
            reviewMode,
            studyList,
            studyObject,
            studyObjectIndex: studyObjectIndex.current,
        };
        localStorage.setItem(
            "exerciseComponentState",
            JSON.stringify(stateToStore)
        );
    }, [selectedTab, selectedExerciseType, reviewMode, studyList, studyObject]);

    return (
        <Container maxWidth="md" sx={{ margin: "6px" }}>
            <Paper elevation={3} className="exercise-card">
                {reviewMode ? (
                    <ReviewComponent
                        studyObject={studyObject}
                        type={selectedExerciseType}
                        status={`${studyObjectIndex.current}/${studyList?.length}`}
                        onUpdate={handleUpdate}
                        onNext={handleNext}
                    />
                ) : (
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography variant="h5">
                                Category {params.book} chapter {chapterId}
                            </Typography>
                            <Typography variant="h6">
                                Choose what to practice:
                            </Typography>
                            <div>
                                <IconButton
                                    style={{ borderRadius: 0 }}
                                    onClick={() => handleContentChange("book")}
                                    className={`icon-button ${
                                        selectedTab === "book"
                                            ? "selected-tab"
                                            : ""
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
                                    <Typography
                                        color={
                                            selectedTab === "book"
                                                ? "primary"
                                                : "default"
                                        }
                                    >
                                        Book (all){" "}
                                    </Typography>
                                </IconButton>

                                <IconButton
                                    style={{ borderRadius: 0 }}
                                    onClick={() =>
                                        handleContentChange("chapter")
                                    }
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

                                <IconButton
                                    style={{ borderRadius: 0 }}
                                    onClick={() =>
                                        handleContentChange("pattern")
                                    }
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

                                <IconButton
                                    style={{ borderRadius: 0 }}
                                    onClick={() =>
                                        handleContentChange("vocabulary")
                                    }
                                    color={
                                        selectedTab === "vocabulary"
                                            ? "primary"
                                            : "default"
                                    }
                                    className={
                                        selectedTab === "vocabulary"
                                            ? "IconButton"
                                            : ""
                                    }
                                >
                                    <FormatListBulletedIcon />
                                    <Typography ml={1}>vocabulary</Typography>
                                </IconButton>
                            </div>
                        </Grid>

                        {/* Excercise type */}
                        <Grid item xs={12}>
                            <Typography variant="h6">
                                Choose an exercise Type:
                            </Typography>
                            <div>
                                <IconButton
                                    style={{ borderRadius: 0 }}
                                    onClick={() =>
                                        handleExerciseTypeChange("reading")
                                    }
                                    color={
                                        selectedExerciseType === "reading"
                                            ? "primary"
                                            : "default"
                                    }
                                >
                                    <AutoStoriesIcon />
                                    <Typography ml={1}>Reading</Typography>
                                </IconButton>
                                <IconButton
                                    style={{ borderRadius: 0 }}
                                    onClick={() =>
                                        handleExerciseTypeChange("writing")
                                    }
                                    color={
                                        selectedExerciseType === "writing"
                                            ? "primary"
                                            : "default"
                                    }
                                >
                                    <EditIcon />
                                    <Typography ml={1}>Writing</Typography>
                                </IconButton>
                                <IconButton
                                    style={{ borderRadius: 0 }}
                                    onClick={() =>
                                        handleExerciseTypeChange("speaking")
                                    }
                                    color={
                                        selectedExerciseType === "speaking"
                                            ? "primary"
                                            : "default"
                                    }
                                >
                                    <SpeakingIcon />
                                    <Typography ml={1}>Speaking</Typography>
                                </IconButton>
                                <IconButton
                                    style={{ borderRadius: 0 }}
                                    onClick={() =>
                                        handleExerciseTypeChange("listening")
                                    }
                                    color={
                                        selectedExerciseType === "listening"
                                            ? "primary"
                                            : "default"
                                    }
                                >
                                    <ListeningIcon />
                                    <Typography ml={1}>Listening</Typography>
                                </IconButton>
                            </div>
                        </Grid>

                        {/* Primary action button */}
                        <Grid item xs={12} m={2}>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handleStartExercise}
                            >
                                Start Exercise
                            </Button>
                        </Grid>
                    </Grid>
                )}
            </Paper>
        </Container>
    );
};

export default ExerciseComponent;
