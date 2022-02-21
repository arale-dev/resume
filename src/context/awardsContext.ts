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
                    '2018 한국 소프트웨어종합학술대회 논문경진대회 학부생부문 우수상',
            },
            {
                type: 'list',
                contents: [
                    {
                        type: 'typo',
                        content: '2018년, 학부연구생으로 ',
                    },
                    {
                        type: 'href',
                        content: 'Computer Graphics and Visualization Lab',
                        link: 'https://cgv.kaist.ac.kr/news/2018',
                    },
                    {
                        type: 'typo',
                        content: '에서',
                    },
                    {
                        type: 'tooltip-typo',
                        content: ' 볼륨렌더링 ',
                        tooltip:
                            '3차원의 데이터를 2차원으로 투영하여\n세포 조직 등의 데이터를 렌더링',
                    },
                    {
                        type: 'typo',
                        content:
                            '관련 개별연구에 참여하였습니다. 투명한 물체의 시인성이 매체에 따라 달라지는 것을 개선하기 위하여 데이터 렌더링 옵션들을 매핑해주는 방안을 제안하였습니다.(링크 : ',
                    },
                    {
                        type: 'href',
                        content:
                            '배경색 변화에 따른 볼륨 가시화 내 반투명 물체의 색 인지 향상에 대한 연구',
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
                content: '정보처리기사',
            },
            {
                type: 'list',
                contents: [
                    {
                        type: 'typo',
                        content: '한국산업인력공단 주관, 2021/06/21 취득 ',
                    },
                ],
            },
        ],
        [
            {
                type: 'mark',
                content: '데이터분석 준전문가',
            },
            {
                type: 'list',
                contents: [
                    {
                        type: 'typo',
                        content: '한국데이터산업진흥원 주관, 2021/09/24 취득 ',
                    },
                ],
            },
        ],
    ],
};
