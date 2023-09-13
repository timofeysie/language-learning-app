import React from "react";
import { Typography } from "@mui/material";
import { Pattern } from "../../types/PatternTypes";
import SampleSentencesComponent from "./SampleSentencesComponent";
import ExercisesComponent from "../Exercises/ExerciseComponent";

import "./PatternComponent.css"; // Import the CSS file

interface PatternComponentProps {
    patterns: Pattern[];
}

const PatternComponent: React.FC<PatternComponentProps> = ({ patterns }) => {
    return (
        <>
            <div className="left-aligned-container">
                {patterns.map((pattern) => (
                    <div key={pattern.id} className="pattern-item">
                        <Typography variant="h4" gutterBottom mt={2}>
                            Pattern {pattern.id + 1}
                        </Typography>
                        <Typography variant="h5" gutterBottom>
                            {pattern.patternTarget}
                        </Typography>
                        <Typography variant="body1" color="textSecondary">
                            {pattern.patternNative}
                        </Typography>
                        <Typography variant="h6" gutterBottom>
                            {pattern.exampleSentenceNativeTitle}
                        </Typography>
                        <Typography variant="body1">
                            {pattern.exampleSentenceTarget}
                        </Typography>
                        <Typography variant="body1" color="textSecondary">
                            {pattern.exampleSentenceNative}
                        </Typography>
                        <SampleSentencesComponent
                            sampleSentences={pattern.sampleSentences}
                        />
                        <ExercisesComponent exercises={pattern.exercises} />
                    </div>
                ))}
            </div>
        </>
    );
};

export default PatternComponent;
