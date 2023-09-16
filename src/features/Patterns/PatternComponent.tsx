import React from "react";
import { Chip, Stack, Typography } from "@mui/material";
import { Pattern } from "../../types/PatternTypes";
import SampleSentencesComponent from "./SampleSentencesComponent";
import ExercisesComponent from "../Exercises/ExerciseComponent";
import AppliedPatternComponent from "../AppliedPatterns/AppliedPatternComponent";
import "./PatternComponent.css";

interface PatternComponentProps {
    patterns: Pattern[];
}

const PatternComponent: React.FC<PatternComponentProps> = ({ patterns }) => {
    return (
        <>
            <div className="left-aligned-container">
                {patterns?.map((pattern) => (
                    <div key={pattern.id} className="pattern-item">
                        <Typography variant="h2" gutterBottom mt={2}>
                            Pattern {pattern.id + 1}
                        </Typography>

                        {pattern.type && (
                            <Stack direction="row" spacing={1}>
                                <Typography
                                    variant="h3"
                                    sx={{
                                        color: (theme) =>
                                            theme.palette.primary.main,
                                    }}
                                    gutterBottom
                                >
                                    {pattern.patternTarget}
                                </Typography>
                                <Chip label={pattern.type} />
                            </Stack>
                        )}

                        <Typography variant="body1" color="textSecondary">
                            {pattern.patternNative}
                        </Typography>
                        <Typography variant="h4" gutterBottom mt={3}>
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
                        {pattern?.exercises && (
                            <ExercisesComponent exercises={pattern.exercises} />
                        )}
                        <Typography variant="h3" gutterBottom mt={3}>
                            Applied Patterns
                        </Typography>
                        <AppliedPatternComponent
                            appliedPatterns={pattern.appliedPatterns}
                        />
                    </div>
                ))}
            </div>
        </>
    );
};

export default PatternComponent;
