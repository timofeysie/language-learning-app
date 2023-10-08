export const getLocalStorageObjectsWithPrefix = (prefix: string) => {
    const objects = [];
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith(prefix)) {
            const item = localStorage.getItem(key);
            if (item) {
                const object = JSON.parse(item);
                objects.push(object);
            }
        }
    }
    return objects;
};

export const loadStudyListObjects = (
    selectedTab: string,
    book: string,
    chapterId: number,
) => {
    const studyListBase = `${book}-${chapterId}-${selectedTab}`;
    const studyListObjects =
        getLocalStorageObjectsWithPrefix(studyListBase) || "[]";
    const parsedStudyListObjects = Array.isArray(studyListObjects)
        ? studyListObjects
        : JSON.parse(studyListObjects || "[]");
    return parsedStudyListObjects || [];
};
