import React from 'react';
import { Grid, Typography } from '@mui/material';
import { WordOrPhrase } from '../../types/WordOrPhraseTypes';
import './VocabularyComponent.css'; // Import your CSS file

interface VocabularyComponentProps {
  vocabulary: WordOrPhrase[];
}

const VocabularyComponent: React.FC<VocabularyComponentProps> = ({ vocabulary }) => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Vocabulary
      </Typography>

      <Grid container spacing={2}>
        {vocabulary.map((word) => (
          <Grid item key={word.id} xs={12} sm={6} md={4} lg={3}>
            <div className="word-container">
              <Typography variant="subtitle1" gutterBottom>
                {word.targetLanguageText}
              </Typography>
              <Typography variant="body1" color="textSecondary">
                {word.nativeLanguageText}
              </Typography>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default VocabularyComponent;
