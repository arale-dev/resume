/* eslint-disable max-len */

import Context from './contextInterface';

export const AwardsEnglish: Context = {
    title: 'Awards/Certificate',
    content: [
        [
            {
                type: 'mark',
                content:
                    'Excellence Awards in Undergraduate Research Paper Competition',
            },
            {
                type: 'mark',
                content: '\n(Korea Software Congress, 2018)',
            },
            {
                type: 'list',
                contents: [
                    {
                        type: 'typo',
                        content: 'I participated in a study related to',
                    },
                    {
                        type: 'tooltip-typo',
                        content: ' volume rendering ',
                        tooltip:
                            'Volume rendering allows users to visualize three-dimensional scalar fields. This is important for any industry that produces 3D data sets for analysis, including physics, medicine, disaster preparedness, and more.',
                    },
                    {
                        type: 'typo',
                        content: 'at',
                    },
                    {
                        type: 'href',
                        content: " 'Computer Graphics and Visualization Lab' ",
                        link: 'https://cgv.kaist.ac.kr/news/2018',
                    },
                    {
                        type: 'typo',
                        content:
                            'in 2018. To improve the visibility of transparent 3D objects depending on the medium, I proposed a conversion method of the rendering options. (Link : ',
                    },
                    {
                        type: 'href',
                        content:
                            'Study of Enhancing Color Perception of Semi-Transparent Object from Volume Visualization with respect to Background Color Change',
                        link: 'https://koasas.kaist.ac.kr/handle/10203/249181',
                    },
                    {
                        type: 'typo',
                        content: ')',
                    },
                ],
            },
        ],
        [
            {
                type: 'mark',
                content: 'Engineer Information Processing',
            },
            {
                type: 'list',
                contents: [
                    {
                        type: 'typo',
                        content: 'acquired on June 21st, 2021',
                    },
                ],
            },
            {
                type: 'list',
                contents: [
                    {
                        type: 'typo',
                        content:
                            'Organized by Ministry of Science and ICT and Implemented by Human Resources Development Service of Korea ',
                    },
                ],
            },
        ],
        [
            {
                type: 'mark',
                content: 'ADsP (Advanced Data Analytics Semi-Professional)',
            },
            {
                type: 'list',
                contents: [
                    {
                        type: 'typo',
                        content: 'acquired on September 24th, 2021',
                    },
                ],
            },
            {
                type: 'list',
                contents: [
                    {
                        type: 'typo',
                        content: 'Organized by Korea Data Agency',
                    },
                ],
            },
        ],
    ],
};

export const AwardsKorean: Context = {
    title: 'Awards/Certificate',
    content: [
        [
            {
                type: 'mark',
                content:
                    '2018 ?????? ????????????????????????????????? ?????????????????? ??????????????? ?????????',
            },
            {
                type: 'list',
                contents: [
                    {
                        type: 'typo',
                        content: '2018???, ????????????????????? ',
                    },
                    {
                        type: 'href',
                        content: 'Computer Graphics and Visualization Lab',
                        link: 'https://cgv.kaist.ac.kr/news/2018',
                    },
                    {
                        type: 'typo',
                        content: '??????',
                    },
                    {
                        type: 'tooltip-typo',
                        content: ' ??????????????? ',
                        tooltip:
                            '3????????? ???????????? 2???????????? ????????????\n?????? ?????? ?????? ???????????? ?????????',
                    },
                    {
                        type: 'typo',
                        content:
                            '?????? ??????????????? ?????????????????????. ????????? ????????? ???????????? ????????? ?????? ???????????? ?????? ???????????? ????????? ????????? ????????? ???????????? ??????????????? ????????? ?????????????????????.(?????? : ',
                    },
                    {
                        type: 'href',
                        content:
                            '????????? ????????? ?????? ?????? ????????? ??? ????????? ????????? ??? ?????? ????????? ?????? ??????',
                        link: 'https://koasas.kaist.ac.kr/handle/10203/249181',
                    },
                    {
                        type: 'typo',
                        content: ')',
                    },
                ],
            },
        ],
        [
            {
                type: 'mark',
                content: '??????????????????',
            },
            {
                type: 'list',
                contents: [
                    {
                        type: 'typo',
                        content: '???????????????????????? ??????, 2021/06/21 ?????? ',
                    },
                ],
            },
        ],
        [
            {
                type: 'mark',
                content: '??????????????? ????????????',
            },
            {
                type: 'list',
                contents: [
                    {
                        type: 'typo',
                        content: '?????????????????????????????? ??????, 2021/09/24 ?????? ',
                    },
                ],
            },
        ],
    ],
};
