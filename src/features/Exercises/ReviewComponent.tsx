import React, { useState, Dispatch, SetStateAction } from "react";
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    IconButton,
    Badge,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import CreateIcon from "@mui/icons-material/Create";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import HearingIcon from "@mui/icons-material/Hearing";
import InfoIcon from "@mui/icons-material/Info";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { StudyListType } from "../../types/StudyListType";
import { StudyRecord } from "../../types/StudyRecord";
import { TestType } from "../../types/TestType";
import "./ReviewComponent.css";

type ReviewComponentProps = {
    studyObject: StudyListType | undefined;
    type: string;
    status: string;
    onUpdate: (updatedStudyObject: StudyListType) => void;
    onNext: () => void;
    setMissedList: Dispatch<SetStateAction<StudyListType[]>>;
};

const ReviewComponent: React.FC<ReviewComponentProps> = ({
    studyObject,
    type,
    status,
    onUpdate,
    onNext,
    setMissedList,
}) => {
    const [expanded, setExpanded] = useState(false);
    const [questionMode, setQuestionMode] = useState<boolean>(true);
    const [scored, setScored] = useState<boolean>(false);

    if (!studyObject) {
        return;
    }

    const handleAccordionChange = () => {
        setExpanded(!expanded);
    };

    const handleNext = () => {
        setQuestionMode(true);
        setExpanded(false);
        setScored(false);
        onNext();
    };

    const handleIconClick = (action: "check" | "close") => {
        if (!scored) {
            setQuestionMode(false);
            // Update the study object based on the action (check or close)
            const updatedStudyObject = { ...studyObject };

            if (action === "check") {
                (
                    updatedStudyObject[
                        type as keyof StudyListType
                    ] as StudyRecord
                ).onList = false;
                setScored(true);
            } else if (action === "close") {
                (
                    updatedStudyObject[
                        type as keyof StudyListType
                    ] as StudyRecord
                ).count += 1;
                setScored(true);
                // add to missed item list
                setMissedList((prevMissedList) => [...prevMissedList, updatedStudyObject]);
            }

            // Call the onUpdate callback to update the parent component's state
            onUpdate(updatedStudyObject);
        }
    };

    const handleViewClick = () => {
        setExpanded(true);
    };

    const iconStyle = {
        padding: "2px",
    };

    const marginStyle = {
        margin: "8px",
    };

    return (
        <>
            <div className="review-container">
                <Accordion
                    expanded={expanded}
                    onChange={handleAccordionChange}
                    className="review-item minHeight1"
                >
                    <AccordionSummary>
                        <Typography>
                            {type === TestType.READING ||
                            type === TestType.LISTENING
                                ? studyObject.target
                                : studyObject.native}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        {expanded && (
                            <div className="answer">
                                <Typography sx={{ marginTop: "12px" }}>
                                    {type === TestType.READING
                                        ? studyObject.native
                                        : studyObject.target}
                                </Typography>
                            </div>
                        )}
                    </AccordionDetails>
                </Accordion>
                <div className="scoring-icons minHeight2">
                    {questionMode ? (
                        <div className="scoring-container">
                            <div className="left-side">{status}</div>
                            <div className="right-side">
                                {expanded ? (
                                    <>
                                        <IconButton
                                            sx={marginStyle}
                                            onClick={() =>
                                                handleIconClick("check")
                                            }
                                        >
                                            <CheckIcon />
                                        </IconButton>
                                        <IconButton
                                            sx={marginStyle}
                                            onClick={() =>
                                                handleIconClick("close")
                                            }
                                        >
                                            <CloseIcon />
                                        </IconButton>
                                    </>
                                ) : (
                                    <>
                                        <IconButton
                                            sx={marginStyle}
                                            onClick={() => handleViewClick()}
                                        >
                                            <RemoveRedEyeIcon />
                                        </IconButton>
                                    </>
                                )}
                            </div>
                        </div>
                    ) : (
                        <div className="scoring-container">
                            <span className="left-side">{status}</span>
                            <IconButton sx={iconStyle}>
                                <Badge
                                    badgeContent={studyObject.reading.count}
                                    color="secondary"
                                >
                                    <AutoStoriesIcon />
                                </Badge>
                            </IconButton>
                            <IconButton sx={iconStyle}>
                                <Badge
                                    badgeContent={studyObject.writing.count}
                                    color="secondary"
                                >
                                    <CreateIcon />
                                </Badge>
                            </IconButton>
                            <IconButton sx={iconStyle}>
                                <Badge
                                    badgeContent={studyObject.listening.count}
                                    color="secondary"
                                >
                                    <HearingIcon />
                                </Badge>
                            </IconButton>
                            <IconButton sx={iconStyle}>
                                <Badge
                                    badgeContent={studyObject.speaking.count}
                                    color="secondary"
                                >
                                    <RecordVoiceOverIcon />
                                </Badge>
                            </IconButton>
                            <IconButton>
                                <InfoIcon />
                            </IconButton>
                            <IconButton
                                sx={iconStyle}
                                onClick={() => handleNext()}
                            >
                                <ArrowForwardIosIcon />
                            </IconButton>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default ReviewComponent;
