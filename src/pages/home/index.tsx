import React, { ReactElement } from 'react';
import styled from 'styled-components';
// import Theme from 'src/assets/Theme';
// import Title from 'src/components/Title';
import Cover from 'src/pages/Home/Cover';
import { Divider } from 'antd';
import Introduction from './Introduction';
import Education from './Education';
import Price from './Price';

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
    return (
        <Container>
            <Cover />
            <PaddedContainer>
                <Introduction />
                <Divider />
                <Education />
                <Divider />
                <Price />
            </PaddedContainer>
        </Container>
    );
};

export default App;
