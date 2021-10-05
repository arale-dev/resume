import { Typography, Divider } from 'antd';
import React, { ReactElement } from 'react';
import { RobotOutlined, CoffeeOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const { Title, Paragraph, Text } = Typography;

const Container = styled.div`
     {
        margin: auto;
        max-width: 1020px;
        padding: 96px 32px;
    }
`;
const StyledTitle = styled(Title)`
     {
        font-size: 46px !important;
    }
`;
const StyledParagraph = styled(Paragraph)`
     {
        font-size: 24px;
    }
`;

const Introduction = (): ReactElement => {
    return (
        <>
            <StyledTitle>Introduction</StyledTitle>
            <StyledParagraph>
                새로움과 도전을 사랑하는 개발자, 박한별입니다.
            </StyledParagraph>
            <StyledParagraph>
                대학교 수업으로 프로그래밍을 시작하게 되었습니다. 간단한 코드로
                이리저리 움직이는 휴보
                <RobotOutlined />를 보고 프로그래밍에 완전히 매료되었습니다.
                현재는{' '}
                <Text mark>ReactJS, TypeScript, ThreeJS, React Native </Text>
                등의 기술을 통해 사용자를 위한 서비스를 만들어가는 중입니다.
            </StyledParagraph>
            <StyledParagraph>
                여러 분야에 호기심이 많고 새로운 지식과 경험을 습득하기
                좋아합니다. 오랜 기간동안 수영과 춤을 배워왔으며, 현재는 커피
                <CoffeeOutlined />와 제과제빵을 배우고 있습니다. 생명과학 및
                바이오/의학 분야에도 관심이 있습니다.
            </StyledParagraph>
            <StyledParagraph>
                개발, 성장, 새로운 사이드 프로젝트에 대한 대화는 언제든
                환영입니다!{' '}
                <a href="mailto:9801gksquf@gmail.com">9801gksquf@gmail.com</a>
                으로 이메일을 주시거나, <a href="/contact">Contact</a> 폼을 통해
                연락처를 남겨주세요.
            </StyledParagraph>
        </>
    );
};
const Education = (): ReactElement => {
    return (
        <>
            <StyledTitle>Education</StyledTitle>
            <StyledParagraph mark>대전과학고등학교, 2013~2015</StyledParagraph>
            <StyledParagraph mark>
                한국과학기술원(KAIST), 2015~2020
            </StyledParagraph>
            <StyledParagraph>
                한국과학기술원에서 전산학부 전공(인공지능 중점이수),
                생명과학과를 부전공하였습니다.{' '}
                <a href="https://cgv.kaist.ac.kr/news/2018">
                    Computer Graphics and Visualization Lab
                </a>
                에서 학부연구생으로{' '}
                <a href="https://koasas.kaist.ac.kr/handle/10203/249181">
                    배경색 변화에 따른 볼륨 가시화 내 반투명 물체의 색 인지
                    향상에 대한 연구
                </a>
                를 진행하였습니다. <a href="https://madcamp.io/">몰입캠프</a>에
                참가하여 Unity/Native Android 애플리케이션을 만들어보고, 이를
                경험삼아 <a href="https://cuop.kaist.ac.kr/">CUOP</a> 인턴십에
                참가하여 스타트업{' '}
                <a href="http://www.cluemetic.com/">클루메틱</a>에서
                애플리케이션 개발에 참여하기도 했습니다.
            </StyledParagraph>
            <StyledParagraph>
                여러 분야에 대한 호기심과 사교적인 성격을 바탕으로 학업 외에도
                댄스 동아리나 학생회 및
                <a href="http://outreach.kaist.ac.kr/"> KSOP 학습멘토링</a>에
                참여하였습니다. 재미로 시작한 활동이었지만 체력과 정신력을
                기르고, 노력하며 성장하는 멘티들을 보며 저 또한 한단계 더
                성장하는 계기가 되었습니다.
            </StyledParagraph>
        </>
    );
};

const TypoContent = (): ReactElement => {
    return (
        <Container>
            <Introduction />
            <Divider />
            <Education />
        </Container>
    );
};

export default TypoContent;
