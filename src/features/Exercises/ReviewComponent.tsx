import React, { useState } from "react";
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
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { StudyListType } from "../../types/StudyListType";
import { StudyRecord } from "../../types/StudyRecord";
import { TestType } from "../../types/TestType";


type ReviewComponentProps = {
    studyObject: StudyListType | undefined;
    type: string;
    onUpdate: (updatedStudyObject: StudyListType) => void;
    onNext: () => void;
};

const ReviewComponent: React.FC<ReviewComponentProps> = ({
    studyObject,
    type,
    onUpdate,
    onNext,
}) => {
    const [expanded, setExpanded] = useState(false);
    const [questionMode, setQuestionMode] = useState<boolean>(true);
    if (!studyObject) {
        return;
    }

    const handleAccordionChange = () => {
        setExpanded(!expanded);
    };

    const handleNext = () => {
        setQuestionMode(true);
        setExpanded(false);
        onNext();
    };

    const handleIconClick = (action: "check" | "close") => {
        setQuestionMode(false);
        // Update the study object based on the action (check or close)
        const updatedStudyObject = { ...studyObject };

        if (action === "check") {
            (
                updatedStudyObject[type as keyof StudyListType] as StudyRecord
            ).onList = false;
        } else if (action === "close") {
            (
                updatedStudyObject[type as keyof StudyListType] as StudyRecord
            ).count += 1;
        }

        // Call the onUpdate callback to update the parent component's state
        onUpdate(updatedStudyObject);
    };

    return (
        <div className="dialog-container">
            <Accordion
                expanded={expanded}
                onChange={handleAccordionChange}
                className="dialog-item"
            >
                <AccordionSummary>
                    <Typography>
                        {type === TestType.READING
                            ? studyObject.target
                            : studyObject.native}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {expanded && (
                        <div>
                            <Typography>
                                {type === TestType.READING
                                    ? studyObject.native
                                    : studyObject.target}
                            </Typography>
                            <div>
                                {questionMode ? (
                                    <div>
                                        <IconButton
                                            onClick={() =>
                                                handleIconClick("check")
                                            }
                                        >
                                            <CheckIcon />
                                        </IconButton>
                                        <IconButton
                                            onClick={() =>
                                                handleIconClick("close")
                                            }
                                        >
                                            <CloseIcon />
                                        </IconButton>
                                    </div>
                                ) : (
                                    <div>
                                        <IconButton>
                                            <Badge
                                                badgeContent={
                                                    studyObject.reading.count
                                                }
                                                color="secondary"
                                            >
                                                <AutoStoriesIcon />
                                            </Badge>
                                        </IconButton>
                                        <IconButton>
                                            <Badge
                                                badgeContent={
                                                    studyObject.writing.count
                                                }
                                                color="secondary"
                                            >
                                                <CreateIcon />
                                            </Badge>
                                        </IconButton>
                                        <IconButton>
                                            <Badge
                                                badgeContent={
                                                    studyObject.listening.count
                                                }
                                                color="secondary"
                                            >
                                                <HearingIcon />
                                            </Badge>
                                        </IconButton>
                                        <IconButton>
                                            <Badge
                                                badgeContent={
                                                    studyObject.speaking.count
                                                }
                                                color="secondary"
                                            >
                                                <RecordVoiceOverIcon />
                                            </Badge>
                                        </IconButton>
                                        <IconButton>
                                            <InfoIcon />
                                        </IconButton>
                                        <IconButton>
                                            <ArrowForwardIosIcon onClick={() =>
                                                handleNext()
                                            } />
                                        </IconButton>
                                    </div>
                                )}
                            </div>
                        </div>
                        )}
                </AccordionDetails>
            </Accordion>
        </div>
    );
};

export default ReviewComponent;
