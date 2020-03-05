import React  from 'react';
import Header from './components/Header/';
import Aside  from './components/Aside/';
import Main   from './components/Main/';
import Footer from './components/Footer/';
import './App.css';

let menu = [
	{ id: 1, href: "#", link: "Profile" },
	{ id: 2, href: "#", link: "Messages" },
	{ id: 3, href: "#", link: "News" },
	{ id: 4, href: "#", link: "Music" },
	{ id: 5, href: "#", link: "Settings" },
];

let blogs = [
    { id: 1, image: "/images/avatar.jpg", alt: "ava", text: "Hey, why nobody love you?"},
    { id: 2, image: "/images/avatar.jpg", alt: "ava", text: "It's our new program"},
];

let slider = [
    { id: 1, image: "/images/slider.jpg", alt: "slider" },
];

const App = () => {
    return (
        <div className="container">
            <Header menu={menu} />
            <Aside menu={menu} />
            <Main blogs={blogs} slider={slider} />
            <Footer />
        </div>
    );
}

export default App;
