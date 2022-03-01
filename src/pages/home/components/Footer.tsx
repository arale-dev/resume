import React, { ReactElement } from 'react';
import styled, { keyframes } from 'styled-components';
import {
    BookOutlined,
    DoubleRightOutlined,
    GithubOutlined,
    MailOutlined,
} from '@ant-design/icons';
import { StyledText } from '@src/components/StyledTypo';

const Container = styled.div`
     {
        display: flex;
        flex-direction: column;
        align-self: stretch;
        padding: 6rem;
        text-align: center;
        align-items: center;
        background-color: #222831;
        position: relative;
    }
`;

const arrowBounce = keyframes`
0% {
    transform: rotate(-90deg) translateX(55%);
}
50% {
    transform: rotate(-90deg) translateX(45%);
}
100% {
    transform: rotate(-90deg) translateX(55%);
}
`;
const TopButton = styled.button`
     {
        &:hover {
            transition: 0.3s;
            font-size: 4.5rem;
            color: #1890ff !important;
        }
        cursor: pointer;
        border: none;
        background-color: #ffffff;
        color: #222831 !important;
        font-size: 4rem;
        width: 7rem;
        height: 7rem;
        border-radius: 3.5rem;
        overflow: hidden;
        text-align: center;
        position: absolute;
        top: 0;
        left: auto;
        right: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        animation: ${arrowBounce} 2s ease-in-out infinite;
    }
`;

const LinkButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding-bottom: 3rem;
`;

const LinkButton = styled.a`
     {
        &:hover {
            transition: all 0.2s ease-in;
            border: 2px solid white;
        }
        display: flex;
        width: 7rem;
        height: 7rem;
        border-radius: 3.5rem;
        overflow: hidden;
        margin: 2rem;
        background-color: #393e46;
        color: white !important;
        font-size: 3.5rem;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 2px solid #393e46;
    }
`;

const Footer = ({ goToHome }: { goToHome: () => void }): ReactElement => {
    return (
        <Container>
            <TopButton onClick={goToHome}>
                <DoubleRightOutlined />
            </TopButton>
            <LinkButtonContainer>
                <LinkButton href="https://github.com/arale-dev">
                    <GithubOutlined />
                </LinkButton>
                <LinkButton href="https://velog.io/@dalbodre_ari">
                    <BookOutlined />
                </LinkButton>
                <LinkButton href="mailto:9801gksquf@gmail.com">
                    <MailOutlined />
                </LinkButton>
            </LinkButtonContainer>
            <StyledText color="#eeeeee">
                Copyright © 2022 Hanbyul Park. All rights reserved.
            </StyledText>
        </Container>
    );
};

export default Footer;
