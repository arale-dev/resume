import React, { ReactElement } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from './pages/Home';
// import Contact from './pages/Contact';
// import Projects from './pages/Projects';
// import Header from './components/Header';
// import Footer from './components/Footer';

const App = (): ReactElement => {
    return (
        <BrowserRouter>
            <Routes>
                {/* <Header /> */}
                <Route path="/" element={<Home />} />
                {/* <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Footer /> */}
            </Routes>
        </BrowserRouter>
    );
};

export default App;
