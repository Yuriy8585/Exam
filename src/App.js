import React from 'react';
import {useState} from "react";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom"
import HomePage from './components/HomePage';
import Catalog from './components/Catalog';
import Home from "./components/Home";
import Page404 from "./components/Page404";
import Breadcrumbs from "./components/Breadcrumbs";
import SideMenu from "./components/SideMenu";


function App() {
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    const handleMouseEnter = () => {
        setDropdownVisible(true);
    };

    const handleMouseLeave = () => {
        setDropdownVisible(false);
    };


    return (<div>
            <div className="App">
                <BrowserRouter>
                    <header className="header center">
                        <div className="header__left">
                            <a href="index.html">
                                <img src="img/logo.png" alt="logo"/>
                            </a>
                            <a href="#">
                                <img src="img/search.svg" alt="search"/>
                            </a>
                        </div>
                        <nav className="header__right">
                            <label htmlFor="header__check">
                                <button>
                                    <svg src="img/menu.svg"
                                         onMouseEnter={handleMouseEnter}
                                         onMouseLeave={handleMouseLeave}
                                    />
                                </button>
                                {isDropdownVisible && <SideMenu/>}
                            </label>
                            <a className=" header__link-site" href=" registration.html">
                                <img src=" img/reg.svg" alt=" reg"/>
                            </a>
                            <a className=" header__link-site" href=" cart.html">
                                <img src=" img/cart.svg" alt=" cart"/>
                            </a>
                        </nav>
                        <input className=" header__checkbox" id=" header__check" type=" checkbox"/>

                    </header>
                    <Breadcrumbs/>
                    <Routes>

                        <Route path="/
                                " element={<Home/>}/>
                        <Route path="/MEN" element={<div>MEN</div>}/>
                        <Route path="/404" element={<Page404/>}/>
                        <Route path="*" element={<Navigate replace to="/404"/>}/>
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    )
}

export default App;