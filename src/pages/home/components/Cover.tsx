import React, { ReactElement } from 'react';
import styled, { keyframes, css } from 'styled-components';
import programmer from '@assets/image/programmer.jpg';
import { DownOutlined } from '@ant-design/icons';
import contextStore from '@context/contextStore';
import { observer } from 'mobx-react-lite';

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
        bottom: 4rem;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        font-size: 4rem;
        animation: ${arrowFadeIn} 3s, ${arrowBounce} 2s infinite;
        @media (max-width: 768px) {
            bottom: 12rem;
            font-size: 6rem;
        }
`;

const TitleContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 15rem;
    right: 15rem;
    transform: translate(0%, -50%);
    display: flex;
    flex-direction: column;
    @media (max-width: 768px) {
        left: 6rem;
        right: 3rem;
    }
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

const TitleLine = styled.p<{ nth: number }>`
    display: block;
    color: white;
    font-weight: bold;
    font-size: 6rem;
    margin-bottom: 0;
    ${(props) =>
        css`
            animation: ${titleAnimation} ${props.nth * 1.5}s;
        `}
    @media (max-width: 799px) {
        font-size: 4rem;
    }
    @media (max-width: 450px) {
        font-size: 3.4rem;
    }
`;

const Cover = (): ReactElement => {
    return (
        <Container>
            <StyledImage src={programmer} />
            <Darker />
            <TitleContainer>
                {contextStore.cover.map((v, i) => (
                    <TitleLine
                        key={contextStore.lang + i.toString()}
                        nth={i + 1}
                    >
                        {v}
                    </TitleLine>
                ))}
            </TitleContainer>
            <StyledDownOutlined />
        </Container>
    );
};

export default observer(Cover);
