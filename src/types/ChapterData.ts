import { Dialog } from "./DialogTypes";
import { WordOrPhrase } from "./WordOrPhraseTypes";
import { Pattern } from "./PatternTypes";
import { AppliedPattern } from "./AppliedPatternTypes";

export type ChapterData = {
    unid: string;
    encoding: string;
    nativeLanguageTitle: string;
    targetLanguageTitle: string;
    nativeLanguageEncoding: string;
    targetLanguageEncoding: string;
    chapter: string;
    dialogue: string;
    titleTarget: string;
    titleNative: string;
    dialog: Dialog[];
    vocabulary: WordOrPhrase[];
    patterns: Pattern[];
    appliedPatterns: AppliedPattern[];
};
