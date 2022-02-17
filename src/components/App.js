import React from 'react';
import Container from 'react-bootstrap/Container';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';

const App = () => {
    return (
        <React.Fragment>
            <Header />
            <Home />
            <Footer />
        </React.Fragment>
    )
}

export default App