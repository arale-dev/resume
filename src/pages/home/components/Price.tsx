/* eslint-disable max-len */
import { Tooltip } from 'antd';
import React, { ReactElement } from 'react';
import {
    StyledA,
    StyledTitle,
    StyledParagraph,
    StyledText,
} from '@components/StyledTypo';

const Price = (): ReactElement => {
    return (
        <>
            <StyledTitle>Awards/Certificate</StyledTitle>
            <StyledParagraph mark>
                2018 한국 소프트웨어종합학술대회 논문경진대회 학부생부문 우수상
                {/* <ul> */}
                <li>
                    2018년, 학부연구생으로
                    <StyledA href="https://cgv.kaist.ac.kr/news/2018">
                        Computer Graphics and Visualization Lab
                    </StyledA>
                    에서{' '}
                    <Tooltip
                        title="3차원의 데이터를 2차원으로 투영하여
                        세포 조직 등의 데이터를 렌더링"
                    >
                        볼륨렌더링
                    </Tooltip>{' '}
                    관련 개별연구에 참여하였습니다. 투명한 물체의 시인성이
                    매체에 따라 달라지는 것을 개선하기 위하여 데이터 렌더링
                    옵션들을 매핑해주는 방안을 제안하였습니다.(
                    <StyledA href="https://koasas.kaist.ac.kr/handle/10203/249181">
                        배경색 변화에 따른 볼륨 가시화 내 반투명 물체의 색 인지
                        향상에 대한 연구
                    </StyledA>
                    )
                </li>
                <li>두줄 테스트</li>
                {/* </ul> */}
            </StyledParagraph>

            <StyledParagraph>
                <StyledText mark>정보처리기사</StyledText>
                <ul>
                    <li>한국산업인력공단 주관, 2021/06/21 취득 </li>
                </ul>
            </StyledParagraph>

            <StyledParagraph>
                <StyledText mark>데이터분석준전문가</StyledText>
                <ul>
                    <li>한국데이터산업진흥원 주관, 2021/09/24 취득 </li>
                </ul>
            </StyledParagraph>
        </>
    );
};

export default Price;
