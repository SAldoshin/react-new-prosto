import React  from 'react';
import Header from './components/Header/';
import Aside  from './components/Aside/';
import Main   from './components/Main/';
import Footer from './components/Footer/';
import './App.css';

const App = () => {
    return (
        <div className="container">
            <Header />
            <Aside />
            <Main />
            <Footer />
        </div>
    );
}

export default App;
