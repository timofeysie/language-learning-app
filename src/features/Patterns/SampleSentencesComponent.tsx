import React from "react";
import { Typography } from "@mui/material";
import { SampleSentence } from "../../types/SampleSentenceTypes";

interface SampleSentencesComponentProps {
    sampleSentences?: SampleSentence[];
}

const SampleSentencesComponent: React.FC<SampleSentencesComponentProps> = ({
    sampleSentences,
}) => {
    if (!sampleSentences || sampleSentences.length === 0) {
        return null;
    }

    return (
        <div>
            <Typography variant="h6" gutterBottom>
                Sample Sentences
            </Typography>
            {sampleSentences.map((sentence, index) => (
                <div key={index}>
                    <Typography>{sentence.targetText}</Typography>
                    <Typography color="textSecondary">
                        {sentence.nativeText}
                    </Typography>
                </div>
            ))}
        </div>
    );
};

export default SampleSentencesComponent;
