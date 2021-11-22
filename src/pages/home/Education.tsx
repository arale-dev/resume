import React, { ReactElement } from 'react';
import {
    // StyledA,
    StyledTitle,
    StyledParagraph,
    StyledText,
} from 'src/components/StyledTypo';

const Education = (): ReactElement => {
    return (
        <>
            <StyledTitle>Education</StyledTitle>
            <StyledParagraph>
                <StyledText mark>한국과학기술원 (KAIST)</StyledText>
                <ul>
                    <li>학부 졸업, 2015~2020 </li>
                    <li>주전공 전산학부, 부전공 생명과학과</li>
                </ul>
            </StyledParagraph>
            <StyledParagraph>
                <StyledText mark>대전과학고등학교</StyledText>
                <ul>
                    <li>수료, 2013~2014 </li>
                </ul>
            </StyledParagraph>
            {/* <StyledParagraph>
                한국과학기술원에서 전산학부 전공(인공지능 중점이수),
                생명과학과를 부전공하였습니다.{' '}
                <StyledA href="https://cgv.kaist.ac.kr/news/2018">
                    Computer Graphics and Visualization Lab
                </StyledA>
                에서 학부연구생으로{' '}
                <StyledA href="https://koasas.kaist.ac.kr/handle/10203/249181">
                    배경색 변화에 따른 볼륨 가시화 내 반투명 물체의 색 인지
                    향상에 대한 연구
                </StyledA>
                를 진행하였습니다.{' '}
                <StyledA href="https://madcamp.io/">몰입캠프</StyledA>에
                참가하여 Unity/Native Android 애플리케이션을 만들고, 이를
                경험삼아{' '}
                <StyledA href="https://cuop.kaist.ac.kr/">CUOP</StyledA>{' '}
                인턴십에 참가하여 스타트업{' '}
                <StyledA href="http://www.cluemetic.com/">클루메틱</StyledA>에서
                애플리케이션 개발에 참여하기도 했습니다.
            </StyledParagraph>
            <StyledParagraph>
                여러 분야에 대한 호기심과 사교적인 성격을 바탕으로 학업 외에도{' '}
                <StyledA href="https://www.youtube.com/user/manshinKAIST">
                    댄스 동아리
                </StyledA>
                나 학생회 및{' '}
                <StyledA href="http://outreach.kaist.ac.kr/">
                    KSOP 학습멘토링
                </StyledA>
                에 참여하였습니다. 재미로 시작한 활동이었지만 체력과 정신력을
                기르고, 노력하며 성장하는 멘티들을 보며 저 또한 한단계 더
                성장하는 계기가 되었습니다.
            </StyledParagraph> */}
        </>
    );
};

export default Education;
