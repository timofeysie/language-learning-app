import { ChapterData } from "../types/ChapterData";
import { StudyListType } from "../types/StudyListType";
import { StudyRecord } from "../types/StudyRecord";

export function generateStudyListObjects(chapterData: ChapterData): StudyListType[] {
    const studyList: StudyListType[] = [];

    console.log('generateStudyListObjects', generateStudyListObjects)

    const defaultStudyRecord: StudyRecord = {
        onList: true,
        count: 0,
        lastDate: new Date().getTime(),
    }

    // Create study list objects for dialog
    if (chapterData.dialog) {
        chapterData.dialog.forEach((dialog, index) => {
            const dialogObject: StudyListType = {
                chapterId: chapterData.id,
                contentId: index,
                contentType: "dialog",
                reading: defaultStudyRecord,
                writing: defaultStudyRecord,
                speaking: defaultStudyRecord,
                listening: defaultStudyRecord,
                target: dialog.speechTarget,
                native: dialog.speechNative,
            };
            studyList.push(dialogObject);
        });
    }

    // Create study list objects for vocabulary
    if (chapterData.vocabulary) {
        chapterData.vocabulary.forEach((vocab, index) => {
            const vocabObject: StudyListType = {
                chapterId: chapterData.id,
                contentId: index,
                contentType: "vocabulary",
                reading: defaultStudyRecord,
                writing: defaultStudyRecord,
                speaking: defaultStudyRecord,
                listening: defaultStudyRecord,
                target: vocab.targetLanguageText,
                native: vocab.nativeLanguageText,
            };
            studyList.push(vocabObject);
        });
    }

    // Create study list objects for patterns example sentences
    if (chapterData.patterns) {
        chapterData.patterns.forEach((pattern, index) => {
            if (pattern.exampleSentenceTarget) {
                const exampleSentenceObject: StudyListType = {
                    chapterId: chapterData.id,
                    contentId: index,
                    contentType: "patterns-exampleSentence",
                    reading: defaultStudyRecord,
                    writing: defaultStudyRecord,
                    speaking: defaultStudyRecord,
                    listening: defaultStudyRecord,
                    target: pattern.exampleSentenceTarget,
                    native: pattern.exampleSentenceNative,
                };
                studyList.push(exampleSentenceObject);
            }

            // Create study list objects for patterns sample sentences
            if (pattern.sampleSentences) {
                pattern.sampleSentences.forEach((sentence, sentenceIndex) => {
                    const sampleSentenceObject: StudyListType = {
                        chapterId: chapterData.id,
                        contentId: sentenceIndex,
                        contentType: "patterns-sampleSentences",
                        reading: defaultStudyRecord,
                        writing: defaultStudyRecord,
                        speaking: defaultStudyRecord,
                        listening: defaultStudyRecord,
                        target: sentence.targetText,
                        native: sentence.nativeText,
                    };
                    studyList.push(sampleSentenceObject);
                });
            }

            // Create study list objects for patterns exercises
            if (pattern.exercises) {
                pattern.exercises.forEach((exercise, exerciseIndex) => {
                    const exerciseObject: StudyListType = {
                        chapterId: chapterData.id,
                        contentId: exerciseIndex,
                        contentType: "patterns-exercises",
                        reading: defaultStudyRecord,
                        writing: defaultStudyRecord,
                        speaking: defaultStudyRecord,
                        listening: defaultStudyRecord,
                        target: exercise.answerKey,
                        native: exercise.exercise,
                    };
                    studyList.push(exerciseObject);
                });
            }

            // Create study list objects for patterns applied patterns
            if (pattern.appliedPatterns) {
                pattern.appliedPatterns.forEach((appliedPattern, appliedPatternIndex) => {
                    const appliedPatternObject: StudyListType = {
                        chapterId: chapterData.id,
                        contentId: appliedPatternIndex,
                        contentType: "patterns-appliedPatterns",
                        reading: defaultStudyRecord,
                        writing: defaultStudyRecord,
                        speaking: defaultStudyRecord,
                        listening: defaultStudyRecord,
                        target: appliedPattern.patternTargetText,
                        native: appliedPattern.patternNativeText,
                    };
                    studyList.push(appliedPatternObject);
                });
            }
        });
    }

    return studyList;
}
