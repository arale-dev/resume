import React, { ReactElement } from 'react';
import './App.css';
import styled from 'styled-components';
import Theme from 'src/assets/Theme';
import Title from './components/Title';

const Container = styled.div`
     {
        text-align: center;
        background-color: ${Theme.light};
    }
`;

function App(): ReactElement {
    return (
        <Container>
            <header className="App-header">
                <Title
                    title1="Park Hanbyeol"
                    title2="Frontend"
                    title3="Developer"
                />
            </header>
        </Container>
    );
}

export default App;
