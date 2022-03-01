import React, { ReactElement, useRef } from 'react';
import styled from 'styled-components';
import Cover from '@pages/Home/components/Cover';
import { Divider } from 'antd';
import Header from '@pages/Home/components/Header';
import Footer from '@pages/Home/components/Footer';
import { observer } from 'mobx-react-lite';
import ContextConverter from '@components/Converter';
import contextStore from '@context/contextStore';
import { StyledTitle } from '@src/components/StyledTypo';
import Contact from './components/Contact';
import Blog from './components/Blog';

const Container = styled.div`
     {
        display: flex;
        flex-direction: column;
        flex: 1;
    }
`;
export const PaddedContainer = styled.div`
     {
        margin: auto;
        max-width: 980px;
        padding: 96px 32px;
    }
`;

const App = (): ReactElement => {
    const scrollRef = useRef<HTMLDivElement[]>([]);
    const goToHome = (): void =>
        scrollRef.current[0]?.scrollIntoView({ behavior: 'smooth' });
    const goToIntro = (): void =>
        scrollRef.current[1]?.scrollIntoView({ behavior: 'smooth' });
    const goToProj = (): void =>
        scrollRef.current[2]?.scrollIntoView({ behavior: 'smooth' });
    const goToBlog = (): void =>
        scrollRef.current[3]?.scrollIntoView({ behavior: 'smooth' });
    const goToContact = (): void =>
        scrollRef.current[4]?.scrollIntoView({ behavior: 'smooth' });

    return (
        <Container>
            <div
                ref={(el: HTMLDivElement) => {
                    scrollRef.current[0] = el;
                }}
            >
                <Cover />
            </div>
            <Header
                goToHome={goToHome}
                goToIntro={goToIntro}
                goToBlog={goToBlog}
                goToProj={goToProj}
                goToContact={goToContact}
            />

            <div
                ref={(el: HTMLDivElement) => {
                    scrollRef.current[1] = el;
                }}
            >
                <PaddedContainer>
                    <StyledTitle>About Me</StyledTitle>
                    <ContextConverter context={contextStore.intro} />
                    <Divider />
                    <ContextConverter context={contextStore.education} />
                    <Divider />
                    <ContextConverter context={contextStore.awards} />
                </PaddedContainer>
            </div>
            <div
                ref={(el: HTMLDivElement) => {
                    scrollRef.current[2] = el;
                }}
                style={{
                    backgroundColor: '#393E46',
                    alignSelf: 'stretch',
                    height: 500,
                }}
            />
            <div
                ref={(el: HTMLDivElement) => {
                    scrollRef.current[3] = el;
                }}
                style={{
                    backgroundColor: '#222831',
                    alignSelf: 'stretch',
                }}
            >
                <Blog />
            </div>
            <div
                ref={(el: HTMLDivElement) => {
                    scrollRef.current[4] = el;
                }}
                style={{
                    backgroundColor: '#393E46',
                    alignSelf: 'stretch',
                }}
            >
                <Contact />
            </div>
            <Footer goToHome={goToHome} />
        </Container>
    );
};

export default observer(App);
