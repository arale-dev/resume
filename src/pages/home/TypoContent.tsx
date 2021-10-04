import { Typography, Divider } from 'antd';
import React, { ReactElement } from 'react';
import { RobotOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const { Title, Paragraph } = Typography;

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

const TypoContent = (): ReactElement => {
    return (
        <Container>
            <StyledTitle>Introduction</StyledTitle>
            <StyledParagraph>
                새로움과 도전을 사랑하는 개발자, 박한별입니다.
            </StyledParagraph>
            <StyledParagraph>
                대학교의 프로그래밍 수업을 통해 프로그래밍을 시작하게
                되었습니다. 짧은 문장만으로 화면 안에서 움직이는 휴보
                <RobotOutlined /> 가 너무 재밌어서 몇 시간이고 화면을
                들여다보았던 기억이 있기도 합니다. 이를 계기로 프로그래밍에
                완전히 매료되어, 현재에는 여러 새로운 기술들과 최적화를 통해
                사용자를 위한 서비스를 만들어가는 중입니다.
            </StyledParagraph>
            <Divider />
        </Container>
    );
};

export default TypoContent;
