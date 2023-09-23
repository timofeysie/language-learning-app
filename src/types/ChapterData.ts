import { Dialog } from "./DialogTypes";
import { WordOrPhrase } from "./WordOrPhraseTypes";
import { Pattern } from "./PatternTypes";

export type ChapterData = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    id: any;
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
};
