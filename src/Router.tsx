import React, { ReactElement } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
// import Contact from './pages/Contact';
// import Projects from './pages/Projects';
// import Header from './components/Header';
// import Footer from './components/Footer';

const App = (): ReactElement => {
    return (
        <BrowserRouter>
            <Route path="/" component={Home} />
        </BrowserRouter>
    );
};

export default App;
