import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom"
import "./index"

import Home from "./components/Home";
import Page404 from "./components/Page404";
import Breadcrumbs from "./components/Breadcrumbs";
import SideMenu from "./components/items/SideMenu";
import Footer from './components/Footer';
import {Button} from '@mui/material';
import Cart from './components/Cart';
import Registration from './components/Registration';
import Catalog from './components/items/Catalog';
import CatalogWomen from './components/items/CatalogWom';
import CatalogKids from './components/items/CatalogKids';

import logo from './img/logo.png';

const NameContext = React.createContext();

function App() {
    const [gistsArray, setGistsArray] = useState([]);

    return (

        <div>
            <NameContext.Provider value={{gistsArray, setGistsArray}}>
                <div className="App">
                    <BrowserRouter>

                        <header className="header center">
                            <div className="header__left">
                                <a href="index.html">
                                    {/*<img src="/my-app/src/i/logo.png" alt="logo"/>*/}
                                    <img src={logo} alt="logo"/>
                                </a>
                                <a href="#">
                                    <img src="/my-app/src/img/search.svg" alt="search"/>
                                </a>
                            </div>
                            <nav className="header__right">
                                <label htmlFor="header__check">
                                    <Button>
                                        <SideMenu/>
                                    </Button>


                                </label>
                                <a className=" header__link-site" href=" registration.html">
                                    <img src="../img/reg.svg" alt=" "/>
                                    <Link className="Registration" to="/REGISTRATION">Log in</Link>
                                </a>
                                <a className=" header__link-site" href="./Cart">

                                    <img src="../img/cart.svg" alt=""/>
                                    <Link className="Cart" to="/CART">Cart</Link>

                                </a>

                            </nav>
                            <input className=" header__checkbox" id=" header__check" type=" checkbox"/>

                        </header>
                        <Breadcrumbs/>

                        <Routes>
                            <Route path="/" element={<Home/>}/>
                            <Route path="/HOME" element={<Home/>}/>
                            <Route path="/CART"
                                   element={<Cart gistsArray={gistsArray}/>}/>

                            <Route path="/MEN" element={<Catalog gistsArray={gistsArray}
                                                                 onGistsArrayChange={(newGistsArray) => setGistsArray(newGistsArray)}/>}/>
                            <Route path="/WOMEN" element={<CatalogWomen gistsArray={gistsArray}
                                                                        onGistsArrayChange={(newGistsArray) => setGistsArray(newGistsArray)}/>}/>
                            <Route path="/KIDS" element={<CatalogKids gistsArray={gistsArray}
                                                                      onGistsArrayChange={(newGistsArray) => setGistsArray(newGistsArray)}/>}/>
                            <Route path="/NEW ARRIVALS" element={<div>NEW ARRIVALS</div>}/>
                            <Route path="/REGISTRATION" element={<Registration/>}/>
                            <Route path="/404" element={<Page404/>}/>
                            <Route path="*" element={<Navigate replace to="/404"/>}/>
                        </Routes>

                    </BrowserRouter>
                    <Footer/>
                </div>
            </NameContext.Provider>
        </div>
    )
}

export default App;