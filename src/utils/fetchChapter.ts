import chapterMapping from "../components/data/chapterMapping";

export const fetchData = async (filename: string) => {
    if (filename) {
        const chapterInfo = chapterMapping.find(
            (info) => info.file === filename
        );
        if (chapterInfo) {
            const dataUrl = `/${chapterInfo.file}`;
            try {
                const response = await fetch(dataUrl);
                if (!response.ok) {
                    throw new Error(`Failed to fetch data for ${filename}`);
                }
                const data = await response.json();
                return data;
            } catch (error) {
                console.error(`Error loading chapter data for ${filename}:`, error);
                throw error;
            }
        }
    }
};
