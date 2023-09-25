import { StudyRecord } from "./StudyRecord";

export type StudyListType = {
    chapterId: number;
    contentId: number;
    contentType: string;
    reading: StudyRecord;
    writing: StudyRecord;
    speaking: StudyRecord;
    listening: StudyRecord;
    native: string;
    target: string;
};
