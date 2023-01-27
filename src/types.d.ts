export interface Data {
  word: string;
  phonetic: string;
  phonetics: Array<{ audio: string; text: string }>;
  meanings: Array<{
    antonyms: string[];
    synonyms: string[];
    definitions: Array<{ definition: string }>;
    partOfSpeech: string;
  }>;
}
