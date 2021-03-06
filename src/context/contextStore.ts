import { makeAutoObservable } from 'mobx';
import {
    // collection,
    // addDoc,
    serverTimestamp,
    setDoc,
    doc,
} from 'firebase/firestore';
import db from '@src/firebase';
import { message } from 'antd';
import Context, { CoverContext } from './contextInterface';
import { CoverEnglish, CoverKorean } from './coverContext';
import { IntroEnglish, IntroKorean } from './introContext';
import { AwardsEnglish, AwardsKorean } from './awardsContext';
import { EducationEnglish, EducationKorean } from './educationContext';

class ContextStore {
    lang: string;

    cover: CoverContext;

    intro: Context;

    education: Context;

    awards: Context;

    name: string;

    email: string;

    message: string;

    constructor() {
        this.lang = 'ko';
        this.cover = CoverKorean;
        this.intro = IntroKorean;
        this.education = EducationKorean;
        this.awards = AwardsKorean;
        this.name = '';
        this.email = '';
        this.message = '';
        makeAutoObservable(this);
    }

    changeLanguage(lang: string): void {
        if (lang === 'ko') {
            this.lang = 'ko';
            this.cover = CoverKorean;
            this.intro = IntroKorean;
            this.education = EducationKorean;
            this.awards = AwardsKorean;
        } else if (lang === 'en') {
            this.lang = 'en';
            this.cover = CoverEnglish;
            this.intro = IntroEnglish;
            this.education = EducationEnglish;
            this.awards = AwardsEnglish;
        }
    }

    setName(name: string): void {
        this.name = name;
    }

    setEmail(email: string): void {
        this.email = email;
    }

    setMessage(m: string): void {
        this.message = m;
    }

    resetContact(): void {
        this.name = '';
        this.email = '';
        this.message = '';
    }

    sendDoc = (): void => {
        if (!(this.name && this.email && this.message)) this.sendFailure();
        else {
            setDoc(
                doc(
                    db,
                    'contacts',
                    new Date().getTime().toString() + this.name
                ),
                {
                    name: this.name,
                    email: this.email,
                    message: this.message,
                    time: serverTimestamp(),
                }
            ).then(this.sendSuccess, this.sendFailure);
        }
    };

    sendSuccess = (): void => {
        if (this.lang === 'ko')
            message.success(
                '???????????? ??????????????? ???????????????! ?????? ??? ??? ?????? ???????????? :)'
            );
        if (this.lang === 'en')
            message.success(
                // eslint-disable-next-line max-len
                "saved the message successfully! I'll contact you soon after reviewing it :)"
            );
        this.resetContact();
    };

    sendFailure = (): void => {
        if (this.lang === 'ko')
            message.warning(
                '???????????? ???????????? ???????????????. contact ?????? ?????? ?????? ?????? ??????????????????.'
            );
        if (this.lang === 'en')
            message.warning(
                'Failed to save the message. Please check the contact form.'
            );
    };
}
message.config({
    duration: 2,
});

const contextStore = new ContextStore();
export default contextStore;
