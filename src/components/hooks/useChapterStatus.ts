// useChapterStatus.ts
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { StudyListType } from "../../types/StudyListType";
import { getLocalStorageObjectsWithPrefix } from "../../utils/localStorageUtils";

export const getCurrentStatus = (
    chapterId?: number,
    selectedTab?: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    params?: any
) => {
    const type = selectedTab; // Fixed variable name
    const chapterListBase = `${params.book}-${chapterId}`;
    let chapterListFullBase = chapterListBase;
    if (type) {
        chapterListFullBase = `${chapterListBase}-${type}`;
    }
    const chapterListObjects =
        getLocalStorageObjectsWithPrefix(chapterListFullBase) || "[]";
    const chapterStatus = {
        totalWords: chapterListObjects.length,
        listeningCount: 0,
        readingCount: 0,
        speakingCount: 0,
        writingCount: 0,
    };
    chapterListObjects.forEach((listObject: StudyListType) => {
        listObject.reading.onList ? chapterStatus.readingCount++ : null;
        listObject.writing.onList ? chapterStatus.writingCount++ : null;
        listObject.listening.onList ? chapterStatus.listeningCount++ : null;
        listObject.speaking.onList ? chapterStatus.speakingCount++ : null;
    });
    console.log("chapterStatus", chapterStatus);
    return chapterStatus;
};

const useChapterStatus = (chapterId: number, selectedTab?: string) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [currentChapterStatus, setCurrentChapterStatus] = useState<any>({});
    const params = useParams();

    useEffect(() => {
        const status = getCurrentStatus(chapterId, selectedTab, params);
        setCurrentChapterStatus(status);
    }, [selectedTab, chapterId, params.book]);

    return currentChapterStatus;
};

export default useChapterStatus;
