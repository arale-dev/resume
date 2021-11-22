import React, { ReactElement } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Header from './components/Header';
import Footer from './components/Footer';

const App = (): ReactElement => {
    return (
        <BrowserRouter>
            <Header />
            <Route exact path="/" component={Home} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/projects" component={Projects} />
            <Footer />
        </BrowserRouter>
    );
};

export default App;
