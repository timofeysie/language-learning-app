import React, { useEffect, useState } from "react";
import chapterMapping from "../data/chapterMapping";
import DialogComponent from "../../features/Dialog/DialogComponent";
import { useParams } from "react-router-dom";
import VocabularyComponent from "../../features/Vocabulary/VocabularyComponent"; // Import feature components
import PatternComponent from "../../features/Patterns/PatternComponent";
import { ChapterData } from "../../types/ChapterData";
import { Link } from "react-router-dom";
import path from 'path';

const ChapterPage: React.FC = () => {
    const { filename } = useParams();

    const [chapterData, setChapterData] = useState<ChapterData | null>(null); // Use an appropriate type for your data

    useEffect(() => {
        if (filename && filename in chapterMapping) {
            const dataUrl =
                process.env.VITE_APP_ENV === "development"
                    ? `/src/components/data/${chapterMapping[filename]}`
                    :  path.join(process.cwd(), `/src/components/data/${chapterMapping[filename]}`);
                console.log('dataUrl', dataUrl);
            console.log('dataUrl', dataUrl)
            fetch(dataUrl)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error(`Failed to fetch data for ${filename}`);
                    }
                    return response.json();
                })
                .then((data) => {
                    setChapterData(data);
                })
                .catch((error) => {
                    console.error(
                        `Error loading chapter data for ${filename}:`,
                        error
                    );
                });
        }
    }, [filename]);

    if (!chapterData) {
        return (
            <>
                <Link to="/">Home</Link>
                <div>Loading...</div>
            </>
        );
    }

    return (
        <div>
            <h1>{chapterData.dialogue}</h1>
            <h2>{chapterData.chapter}</h2>
            <h3>{chapterData.titleTarget}</h3>
            <h3>{chapterData.titleNative}</h3>

            <DialogComponent dialog={chapterData.dialog} />
            <VocabularyComponent vocabulary={chapterData.vocabulary} />
            <PatternComponent patterns={chapterData.patterns} />
            {/* <ExercisesComponent exercisesData={chapterData.exercises} />
            <AppliedPatternsComponent appliedPatternsData={chapterData.appliedPatterns} /> */}
        </div>
    );
};

export default ChapterPage;
