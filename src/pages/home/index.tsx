import React, { ReactElement } from 'react';
import styled from 'styled-components';
// import Theme from 'src/assets/Theme';
// import Title from 'src/components/Title';
import Header from 'src/pages/home/Header';
import Cover from 'src/pages/home/Cover';
import Footer from './Footer';
import Introduction from './TypoContent';

// background-color: ${Theme.light};
const Container = styled.div`
     {
        display: flex;
        flex-direction: column;
    }
`;

const App = (): ReactElement => {
    return (
        <Container>
            <Header />
            <Cover />
            <Introduction />
            <Footer />
        </Container>
    );
};

export default App;
