// ChapterPage.tsx
import React from 'react'
import chapterData from '../data/chapter28Data.json';
import DialogComponent from "../../features/Dialog/DialogComponent";

import VocabularyComponent from '../../features/Vocabulary/VocabularyComponent'; // Import feature components
import PatternComponent from '../../features/Patterns/PatternComponent';
// import ExercisesComponent from '../../features/Exercises/ExercisesComponent';
// import AppliedPatternsComponent from '../../features/AppliedPatterns/AppliedPatternsComponent';

const ChapterPage: React.FC = () => {
  return (
    <div>
      <h1>{chapterData.dialogue}</h1>
      <h2>{chapterData.chapter}</h2>
      <h3>{chapterData.titleTarget}</h3>
      <h3>{chapterData.titleNative}</h3>

      {/* Render feature components with data */}
      <DialogComponent dialog={chapterData.dialog} />
      <VocabularyComponent vocabulary={chapterData.vocabulary} />
      <PatternComponent patterns={chapterData.patterns} />
      {/* <ExercisesComponent exercisesData={chapterData.exercises} />
      <AppliedPatternsComponent appliedPatternsData={chapterData.appliedPatterns} /> */}
    </div>
  );
};

export default ChapterPage;
