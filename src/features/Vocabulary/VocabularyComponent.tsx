import React, { useState } from "react";
import { Grid, Typography, Collapse } from "@mui/material";
import { WordOrPhrase } from "../../types/WordOrPhraseTypes";
import "./VocabularyComponent.css";

interface VocabularyComponentProps {
    vocabulary: WordOrPhrase[];
}

const VocabularyComponent: React.FC<VocabularyComponentProps> = ({
    vocabulary,
}) => {
    const [expandedWord, setExpandedWord] = useState<number | null>(null);

    const handleExpand = (wordId: number) => {
        if (expandedWord === wordId) {
            setExpandedWord(null);
        } else {
            setExpandedWord(wordId);
        }
    };

    return (
        <div>
            <Typography variant="h3" gutterBottom>
                Vocabulary
            </Typography>

            <Grid container spacing={2}>
                {vocabulary.map((word) => (
                    <Grid item key={word.id} xs={12} sm={8} md={7} lg={6}>
                        <div
                            className={`word-container ${
                                expandedWord === word.id ? "expanded" : ""
                            }`}
                        >
                            <Typography
                                variant="subtitle1"
                                gutterBottom
                                onClick={() => handleExpand(word.id)}
                            >
                                {word.targetLanguageText}
                            </Typography>
                            <Collapse in={expandedWord === word.id}>
                                <Typography
                                    mb={1}
                                    ml={1}
                                    variant="body1"
                                    color="textSecondary"
                                >
                                    {word.nativeLanguageText}
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
