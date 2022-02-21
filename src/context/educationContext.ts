/* eslint-disable max-len */

import Context from './contextInterface';

export const EducationEnglish: Context = {
    title: 'Education',
    content: [
        [
            {
                type: 'mark',
                content:
                    'KAIST, Korea Advanced Institute of Science and Technology',
            },
            {
                type: 'list',
                contents: [
                    {
                        type: 'typo',
                        content: 'Bachelor of Engineering, 03.2015~08.2020',
                    },
                ],
            },
            {
                type: 'list',
                contents: [
                    {
                        type: 'typo',
                        content:
                            'Majored in School of Computing, Minored in Biological Science',
                    },
                ],
            },
        ],
        [
            {
                type: 'mark',
                content: 'Daejeon Science High School',
            },
            {
                type: 'list',
                contents: [
                    {
                        type: 'typo',
                        content: '03.2015~02.2020',
                    },
                ],
            },
        ],
    ],
};

export const EducationKorean: Context = {
    title: 'Education',
    content: [
        [
            {
                type: 'mark',
                content: '한국과학기술원(KAIST)',
            },
            {
                type: 'list',
                contents: [
                    {
                        type: 'typo',
                        content: '학부 졸업, 2015.03~2020.08',
                    },
                ],
            },
            {
                type: 'list',
                contents: [
                    {
                        type: 'typo',
                        content: '주전공 전산학부, 부전공 생명과학과',
                    },
                ],
            },
        ],
        [
            {
                type: 'mark',
                content: '대전과학고등학교',
            },
            {
                type: 'list',
                contents: [
                    {
                        type: 'typo',
                        content: '졸업, 2015.03~2020.02',
                    },
                ],
            },
        ],
    ],
};
