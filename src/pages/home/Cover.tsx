import React, { ReactElement } from 'react';
import styled, { keyframes, css } from 'styled-components';
import programmer from 'src/assets/image/programmer.jpg';
import { DownOutlined } from '@ant-design/icons';

const Container = styled.div`
     {
        position: relative;
        align-self: stretch;
        overflow: hidden;
    }
`;
const StyledImage = styled.img`
     {
        display: block;
        width: 100vw;
        height: 100vh;
        object-fit: cover;
    }
`;
const Darker = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #00000088;
`;

const arrowFadeIn = keyframes`
    0% {
        opacity: 0;
    }
    80% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;
const arrowBounce = keyframes`
0% {
    transform: translateY(0);
}
50% {
    transform: translateY(15px);
}
100% {
    transform: translateY(0);
}
`;
const StyledDownOutlined = styled(DownOutlined)`
     {
        position: absolute;
        bottom: 40px;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        font-size: 40px;
        animation: ${arrowFadeIn} 4s, ${arrowBounce} 2s infinite;
`;

const TitleContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 150px;
    transform: translate(0%, -50%);
    display: flex;
    flex-direction: column;
`;

const titleAnimation = keyframes`
    0% {
        opacity: 0;
    }
    60% {
        opacity: 0;
        transform: translateY(15px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
`;

const TitleLine = styled.text<{ nth: number }>`
    display: block;
    color: white;
    font-weight: bold;
    font-size: 60px;
    ${(props) =>
        css`
            animation: ${titleAnimation} ${props.nth * 1.5}s;
        `}
`;

type TitleProps = {
    title1: string;
    title2: string;
    title3: string;
};

const Title: React.FC<TitleProps> = ({ title1, title2, title3 }) => {
    return (
        <TitleContainer>
            <TitleLine nth={1}>{title1}</TitleLine>
            <TitleLine nth={2}>{title2}</TitleLine>
            <TitleLine nth={3}>{title3}</TitleLine>
        </TitleContainer>
    );
};

const Cover = (): ReactElement => {
    return (
        <Container>
            <StyledImage src={programmer} />
            <Darker />
            <Title
                title1="안녕하세요,"
                title2="사용자의 입장에서 서비스를 생각하는"
                title3="주니어 프론트엔드 개발자 박한별입니다."
            />
            <StyledDownOutlined />
        </Container>
    );
};

export default Cover;
