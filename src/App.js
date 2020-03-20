import React  from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import './App.css';

import Header    from './components/Header/';
import Aside     from './components/Aside/';
import Profile   from './components/Profile/';
import Footer    from './components/Footer/';
import Dialogs   from './components/Dialogs/';
import News      from './components/News/';
import Music     from './components/Music/';
import Settings  from './components/Settings/';

let menu = [
	{ id: 1, href: "/profile",  link: "Profile" },
	{ id: 2, href: "/dialogs",  link: "Dialogs" },
	{ id: 3, href: "/news",     link: "News" },
	{ id: 4, href: "/music",    link: "Music" },
	{ id: 5, href: "/settings", link: "Settings" },
];

let blogs = [
    { id: 1, image: "/images/avatar.jpg", alt: "ava", text: "Hey, why nobody love you?", like: 10},
    { id: 2, image: "/images/avatar.jpg", alt: "ava", text: "It's our new program", like: 20},
];

let slider = [
    { id: 1, image: "/images/slider.jpg", alt: "slider" },
    { id: 2, image: "/images/slider.jpg", alt: "slider" },
];

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="container">
                <Header menu={menu} />
                <Aside menu={menu} />
                <main className="content">
                    <Route path="/dialogs"  component={Dialogs} />
                    <Route path="/profile"  render={() => <Profile blogs={blogs} slider={slider} /> } />
                    <Route path="/news"     component={News} />
                    <Route path="/music"    component={Music} />
                    <Route path="/settings" component={Settings} />
                </main>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
