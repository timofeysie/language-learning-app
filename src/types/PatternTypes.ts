import { SampleSentence } from "./SampleSentenceTypes";
import { Exercise } from "./ExerciseTypes";
import { AppliedPattern } from "./AppliedPatternTypes";

export type Pattern = {
    id: number;
    patternTarget: string;
    patternNative: string;
    type?: string;
    exampleSentenceNativeTitle: string;
    exampleSentenceTarget: string;
    exampleSentenceNative: string;
    sampleSentences?: SampleSentence[];
    exercises: Exercise[];
    appliedPatterns: AppliedPattern[];
};
