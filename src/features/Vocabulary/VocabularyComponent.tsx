import React, { useState } from "react";
import { Grid, Typography, Collapse } from "@mui/material";
import { WordOrPhrase } from "../../types/WordOrPhraseTypes";
import "./VocabularyComponent.css";
import TypeBadges from "../../components/shared/TypeBadges";
// import { TestType } from "../../types/TestType";
import useChapterStatus from "../../components/hooks/useChapterStatus";
import { loadStudyListObjects } from "../../utils/localStorageUtils";
import { useParams } from "react-router";
import { StudyListType } from "../../types/StudyListType";
import { TestType } from "../../types/TestType";

interface VocabularyComponentProps {
    vocabulary: WordOrPhrase[];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    chapterId?: any;
}

const VocabularyComponent: React.FC<VocabularyComponentProps> = ({
    vocabulary,
    chapterId,
}) => {
    const [expandedWord, setExpandedWord] = useState<number | null>(null);
    const currentChapterStatus = useChapterStatus(chapterId);
    const [selectedExerciseType, setSelectedExerciseType] =
        useState<string>("");
    const params = useParams();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [filteredVocab, setFilteredVocab] = useState<any>(vocabulary);

    const handleExerciseTypeChange = (exerciseType: string) => {
        setSelectedExerciseType(exerciseType);
        const book = params.book ? params.book : "0";
        const newStudyList: StudyListType [] = loadStudyListObjects(
            "vocabulary",
            book,
            chapterId,
        );
        const filteredList: StudyListType[] = newStudyList.filter(
            (item: StudyListType) =>
                item[exerciseType as TestType]?.onList === true
        );
        if (exerciseType !== "all") {
            setFilteredVocab(filteredList);
        } else {
            setFilteredVocab(newStudyList);
        }
    };

    const handleExpand = (wordId: number) => {
        if (expandedWord === wordId) {
            setExpandedWord(null);
        } else {
            setExpandedWord(wordId);
        }
    };

    return (
        <div className="center">
            <Grid container spacing={1}>
                <div className="margin18">
                    <TypeBadges
                        currentChapterStatus={currentChapterStatus}
                        handleExerciseTypeChange={handleExerciseTypeChange}
                        selectedExerciseType={selectedExerciseType}
                        iconMargin={"12px"}
                        showVocabIcon={true}
                    />
                </div>
                {filteredVocab.map((word: StudyListType) => (
                    <Grid
                        item
                        key={word.contentId}
                        xs={11}
                        sm={8}
                        md={7}
                        lg={6}
                        onClick={() => handleExpand(word.contentId)}
                    >
                        <div
                            className={`word-container ${
                                expandedWord === word.contentId ? "expanded" : ""
                            }`}
                        >
                            <Typography m={1} variant="subtitle1" gutterBottom>
                                {word.target}
                            </Typography>
                            <Collapse in={expandedWord === word.contentId}>
                                <Typography
                                    mb={1}
                                    ml={1}
                                    variant="body1"
                                    color="textSecondary"
                                >
                                    {word.native}
                                </Typography>
                            </Collapse>
                        </div>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default VocabularyComponent;
