import React, { ReactElement } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/home';

const App = (): ReactElement => {
    return (
        <BrowserRouter>
            <Route exact path="/" component={Home} />
            {/* <Route path="/about" component={About} /> */}
        </BrowserRouter>
    );
};

export default App;
