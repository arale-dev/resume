import React, { ReactElement, useRef } from 'react';
import styled from 'styled-components';
import Cover from '@pages/Home/components/Cover';
import { Divider } from 'antd';
import Header from '@pages/Home/components/Header';
import Footer from '@pages/Home/components/Footer';
import Introduction from './components/Introduction';
import Education from './components/Education';
import Price from './components/Price';
import Work from './components/Work';

// background-color: ${Theme.light};
const Container = styled.div`
     {
        display: flex;
        flex-direction: column;
        flex: 1;
    }
`;
const PaddedContainer = styled.div`
     {
        margin: auto;
        max-width: 1020px;
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
    const goToContact = (): void =>
        scrollRef.current[3]?.scrollIntoView({ behavior: 'smooth' });

    return (
        <Container>
            <div
                ref={(el: HTMLDivElement) => {
                    scrollRef.current[0] = el;
                }}
            />
            <Cover />
            <Header
                goToHome={goToHome}
                goToIntro={goToIntro}
                goToProj={goToProj}
                goToContact={goToContact}
            />

            <div
                ref={(el: HTMLDivElement) => {
                    scrollRef.current[1] = el;
                }}
            />
            <PaddedContainer>
                <Introduction />
                <Divider />
                <Education />
                <Divider />
                <Work />
                <Divider />
                <Price />
            </PaddedContainer>
            <div
                ref={(el: HTMLDivElement) => {
                    scrollRef.current[2] = el;
                }}
                style={{
                    backgroundColor: 'red',
                    height: 2000,
                    alignSelf: 'stretch',
                }}
            />
            <div
                ref={(el: HTMLDivElement) => {
                    scrollRef.current[3] = el;
                }}
                style={{
                    backgroundColor: 'green',
                    height: 2000,
                    alignSelf: 'stretch',
                }}
            />
            <Footer />
        </Container>
    );
};

export default App;
