import React from "react";
import { IconButton, Badge, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import {
    RecordVoiceOver as SpeakingIcon,
    Hearing as ListeningIcon,
} from "@mui/icons-material";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

interface TypeBadgesProps {
    selectedExerciseType?: string;
    currentChapterStatus: {
        readingCount: number;
        writingCount: number;
        speakingCount: number;
        listeningCount: number;
    };
    handleExerciseTypeChange: (exerciseType: string) => void;
    showLabels?: boolean;
    iconMargin?: string;
    showVocabIcon?: boolean;
}

const TypeBadges: React.FC<TypeBadgesProps> = ({
    selectedExerciseType,
    currentChapterStatus,
    handleExerciseTypeChange,
    showLabels,
    iconMargin,
    showVocabIcon,
}) => {

    return (
        <div>
            { showVocabIcon && (
                <>
                <IconButton
                style={{ borderRadius: 0, margin: iconMargin }}
                onClick={() => handleExerciseTypeChange("all")}
                color={
                    selectedExerciseType === "reading" ? "primary" : "default"
                }
            >
                <Badge
                    badgeContent={currentChapterStatus.readingCount}
                    color="secondary"
                >
                    <FormatListBulletedIcon />
                </Badge>
                {showLabels && <Typography ml={1}>All</Typography>}
            </IconButton>
                </>
            )}
            <IconButton
                style={{ borderRadius: 0, margin: iconMargin }}
                onClick={() => handleExerciseTypeChange("reading")}
                color={
                    selectedExerciseType === "reading" ? "primary" : "default"
                }
            >
                <Badge
                    badgeContent={currentChapterStatus.readingCount}
                    color="secondary"
                >
                    <AutoStoriesIcon />
                </Badge>
                {showLabels && <Typography ml={1}>Reading</Typography>}
            </IconButton>
            <IconButton
                style={{ borderRadius: 0, margin: iconMargin }}
                onClick={() => handleExerciseTypeChange("writing")}
                color={
                    selectedExerciseType === "writing" ? "primary" : "default"
                }
            >
                <Badge
                    badgeContent={currentChapterStatus.writingCount}
                    color="secondary"
                >
                    <EditIcon />
                </Badge>
                {showLabels && <Typography ml={1}>Writing</Typography>}
            </IconButton>
            <IconButton
                style={{ borderRadius: 0, margin: iconMargin }}
                onClick={() => handleExerciseTypeChange("speaking")}
                color={
                    selectedExerciseType === "speaking" ? "primary" : "default"
                }
            >
                <Badge
                    badgeContent={currentChapterStatus.speakingCount}
                    color="secondary"
                >
                    <SpeakingIcon />
                </Badge>
                {showLabels && <Typography ml={1}>Speaking</Typography>}
            </IconButton>
            <IconButton
                style={{ borderRadius: 0, margin: iconMargin }}
                onClick={() => handleExerciseTypeChange("listening")}
                color={
                    selectedExerciseType === "listening" ? "primary" : "default"
                }
            >
                <Badge
                    badgeContent={currentChapterStatus.listeningCount}
                    color="secondary"
                >
                    <ListeningIcon />
                </Badge>
                {showLabels && <Typography ml={1}>Listening</Typography>}
            </IconButton>
        </div>
    );
};

export default TypeBadges;
