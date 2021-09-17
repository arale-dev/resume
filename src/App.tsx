import React, { ReactElement } from 'react';
import './App.css';
import Title from './component/Title';

function App(): ReactElement {
    return (
        <div className="App">
            <header className="App-header">
                <Title
                    title1="Park Hanbyeol"
                    title2="Frontend"
                    title3="Developer"
                />
            </header>
        </div>
    );
}

export default App;
