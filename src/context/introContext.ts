/* eslint-disable max-len */

import Context from './contextInterface';

export const IntroEnglish: Context = {
    title: 'About Me',
    content: [
        [
            {
                type: 'typo',
                content:
                    "I'm Park Hanbyul, a developer who loves novelty and challenge.",
            },
        ],
        [
            {
                type: 'typo',
                content:
                    'I fell under the spell of programming by moving the Hubo character ',
            },
            {
                type: 'tooltip-icon',
                content: 'robot',
            },
            {
                type: 'typo',
                content:
                    ' through a few lines of code in the college assignment. These days, I am developing web/app using ',
            },
            {
                type: 'mark',
                content:
                    'ReactJS, Javascript, TypeScript, ThreeJS, and ReactNative.',
            },
        ],
        [
            {
                type: 'typo',
                content:
                    'I love exploring the various field and new technologies.',
            },
            {
                type: 'icon',
                content: 'search',
            },
            {
                type: 'typo',
                content:
                    ' From data science and backend to bio/medicine and Chinese, I am building up my knowledge not limited to the frontend field.',
            },
        ],
        [
            {
                type: 'typo',
                content:
                    "You're always welcome to talk about development, challenge, and new toy projects! Please email ",
            },
            {
                type: 'href',
                content: '9801gksquf@gmail.com',
                link: 'mailto:9801gksquf@gmail.com',
            },
            {
                type: 'typo',
                content:
                    ' or leave your message through the contact form below.',
            },
            {
                type: 'icon',
                content: 'smile',
            },
        ],
    ],
};

export const IntroKorean: Context = {
    title: 'About Me',
    content: [
        [
            {
                type: 'typo',
                content: '새로움과 도전을 사랑하는 개발자, 박한별입니다.',
            },
        ],
        [
            {
                type: 'typo',
                content:
                    '대학교 과제에서 몇줄의 코드로 화면을 뛰노는 휴보 캐릭터',
            },
            {
                type: 'tooltip-icon',
                content: 'robot',
                tooltip: '클릭해보세요!',
            },
            {
                type: 'typo',
                content:
                    '를 보고 매료되어, 프로그래밍을 시작하게 되었습니다. 현재는 ',
            },
            {
                type: 'mark',
                content: 'ReactJS, TypeScript, ThreeJS, React Native',
            },
            {
                type: 'typo',
                content: '를 기반으로 웹/앱 서비스를 개발하고 있습니다.',
            },
        ],
        [
            {
                type: 'typo',
                content:
                    '여러 분야에 호기심이 많고 새로운 지식과 경험을 습득하기 좋아합니다.',
            },
            {
                type: 'icon',
                content: 'search',
            },
            {
                type: 'typo',
                content:
                    ' Data science, 백엔드, 중국어, 바이오/의학 등 분야를 가리지 않고 지식을 쌓아나가고 있습니다.',
            },
        ],
        [
            {
                type: 'typo',
                content:
                    '개발, 성장, 새로운 사이드 프로젝트에 대한 대화는 언제든 환영입니다! ',
            },
            {
                type: 'href',
                content: '9801gksquf@gmail.com',
                link: 'mailto:9801gksquf@gmail.com',
            },
            {
                type: 'typo',
                content:
                    '으로 이메일을 주시거나, 상단의 Contact 폼을 통해 연락처를 남겨주세요.',
            },
            {
                type: 'icon',
                content: 'smile',
            },
        ],
    ],
};
