import { SampleSentence } from "./SampleSentenceTypes";
import { Exercise } from "./ExerciseTypes";

export type Pattern = {
    id: number;
    patternTarget: string;
    patternNative: string;
    type?: string; // Change type to string
    exampleSentenceNativeTitle: string;
    exampleSentenceTarget: string;
    exampleSentenceNative: string;
    sampleSentences?: SampleSentence[];
    exercises: Exercise[];
};
