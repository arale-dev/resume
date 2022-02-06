import { makeAutoObservable } from 'mobx';
import Context, { CoverContext } from './contextInterface';
import { CoverEnglish, CoverKorean } from './coverContext';
import { IntroEnglish, IntroKorean } from './introContext';

class ContextStore {
    lang: string;

    cover: CoverContext;

    intro: Context;

    education: Context;

    awards: Context;

    constructor() {
        this.lang = 'ko';
        this.cover = CoverKorean;
        this.intro = IntroKorean;
        this.education = IntroKorean;
        this.awards = IntroKorean;
        makeAutoObservable(this);
    }

    changeLanguage(lang: string): void {
        if (lang === 'ko') {
            this.lang = 'ko';
            this.cover = CoverKorean;
            this.intro = IntroKorean;
            this.education = IntroKorean;
            this.awards = IntroKorean;
        } else if (lang === 'en') {
            this.lang = 'en';
            this.cover = CoverEnglish;
            this.intro = IntroEnglish;
            this.education = IntroEnglish;
            this.awards = IntroEnglish;
        }
    }
}

const contextStore = new ContextStore();
export default contextStore;
