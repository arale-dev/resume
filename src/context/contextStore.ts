import { makeAutoObservable } from 'mobx';
import Context from './contextInterface';
import { IntroEnglish, IntroKorean } from './introContext';

class ContextStore {
    intro: Context;

    education: Context;

    awards: Context;

    constructor() {
        this.intro = IntroKorean;
        this.education = IntroKorean;
        this.awards = IntroKorean;
        makeAutoObservable(this);
    }

    changeLanguage(lang: string): void {
        if (lang === 'ko') {
            this.intro = IntroKorean;
            this.education = IntroKorean;
            this.awards = IntroKorean;
        } else if (lang === 'en') {
            this.intro = IntroEnglish;
            this.education = IntroEnglish;
            this.awards = IntroEnglish;
        }
    }
}

const contextStore = new ContextStore();
export default contextStore;
