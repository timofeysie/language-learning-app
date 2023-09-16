import React from "react";
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Exercise } from "../../types/ExerciseTypes";

interface ExerciseComponentProps {
    exercises: Exercise[];
}

const ExerciseComponent: React.FC<ExerciseComponentProps> = ({ exercises }) => {
    return (
        <div>
            <Typography variant="h3" gutterBottom>
                Exercises
            </Typography>

            {exercises.map((exercise) => (
                <Accordion key={exercise.id}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="h4">
                            {exercise.id}. {exercise.exercise}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div>
                            {exercise.answerKey
                                .split("\n")
                                .map((answer, index) => (
                                    <Typography
                                        key={index}
                                        variant="body1"
                                        color="textSecondary"
                                    >
                                        {answer}
                                    </Typography>
                                ))}
                        </div>
                    </AccordionDetails>
                </Accordion>
            ))}
        </div>
    );
};

export default ExerciseComponent;
