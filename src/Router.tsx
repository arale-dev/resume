import React, { ReactElement } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';

const App = (): ReactElement => {
    return (
        <BrowserRouter>
            <Route path="/" component={Home} />
        </BrowserRouter>
    );
};

export default App;
