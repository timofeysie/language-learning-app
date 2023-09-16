import React, { useEffect, useState } from "react";
import chapterMapping from "../data/chapterMapping";
import DialogComponent from "../../features/Dialog/DialogComponent";
import { useParams } from "react-router-dom";
import VocabularyComponent from "../../features/Vocabulary/VocabularyComponent"; // Import feature components
import PatternComponent from "../../features/Patterns/PatternComponent";
import { ChapterData } from "../../types/ChapterData";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

const ChapterPage: React.FC = () => {
    const { filename } = useParams();

    const [chapterData, setChapterData] = useState<ChapterData | null>(null); // Use an appropriate type for your data

    useEffect(() => {
        if (filename) {
            const chapterInfo = chapterMapping.find(
                (info) => info.link === filename
            );

            if (chapterInfo) {
                const dataUrl = `/${chapterInfo.file}`;
                fetch(dataUrl)
                    .then((response) => {
                        if (!response.ok) {
                            throw new Error(
                                `Failed to fetch data for ${filename}`
                            );
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
        }
    }, [filename, chapterMapping]);

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
            <Typography variant="h1">{chapterData.dialogue}</Typography>
            <Typography variant="h1">{chapterData.chapter}</Typography>
            <Typography variant="h1">{chapterData.titleTarget}</Typography>
            <Typography variant="h1">{chapterData.titleNative}</Typography>

            <DialogComponent dialog={chapterData.dialog} />
            <VocabularyComponent vocabulary={chapterData.vocabulary} />
            <PatternComponent patterns={chapterData.patterns} />
            {/* <ExercisesComponent exercisesData={chapterData.exercises} />
            <AppliedPatternsComponent appliedPatternsData={chapterData.appliedPatterns} /> */}
        </div>
    );
};

export default ChapterPage;
