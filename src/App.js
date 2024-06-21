import React from 'react';
import {Link} from "react-router-dom";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom"
import "./index"

import Home from "./components/Home";
import Page404 from "./components/Page404";
import Breadcrumbs from "./components/Breadcrumbs";
import SideMenu from "./components/items/SideMenu";
import Footer from './components/Footer';
import { Button } from '@mui/material';
import Cart from './components/Cart';
import Registration from './components/Registration';
import Catalog from './components/items/Catalog';
import CatalogWomen from './components/items/CatalogWom';
import CatalogKids from './components/items/CatalogKids';
import logo from './img/logo.png';
import search from './img/search.svg';



function App() {
    

    return (<div>
            <div className="App">
                <BrowserRouter>

                    <header className="header center">
                        <div className="header__left">
                            <a href="index.html">
                            <img src={logo} alt="logo"/>
                            </a>
                            <a href="#">
                            <img src={search} alt="search"/>
                            </a>
                        </div>
                        <nav className="header__right">
                            <label htmlFor="header__check">
                            <Button><SideMenu/></Button>
                                   
                                
                                
                                
                            </label>
                            <a className=" header__link-site" href=" registration.html">
                                <img src="/my-app/src/img/reg.svg" alt=" "/>
                                <Link className="Registration" to="/REGISTRATION">Log in</Link>
                            </a>
                            <a className=" header__link-site" href="./Cart">
                                
                                    <img src="/my-app/src/img/cart.svg" alt=""/>
                                    <Link className="Cart" to="/CART">Cart</Link>
                                
                            </a>
                            
                        </nav>
                        <input className=" header__checkbox" id=" header__check" type=" checkbox"/>

                    </header>
                    <Breadcrumbs/>
                    
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/HOME" element={<Home/>}/>
                        <Route path="/CART" element={<Cart/>}/>
                        <Route path="/MEN" element={<Catalog/>}/>
                        <Route path="/WOMEN" element={<CatalogWomen/>}/>
                        <Route path="/KIDS" element={<CatalogKids/>}/>
                        <Route path="/NEW ARRIVALS" element={<div>NEW ARRIVALS</div>}/>
                        <Route path="/REGISTRATION" element={<Registration/>}/>
                        <Route path="/404" element={<Page404/>}/>
                        <Route path="*" element={<Navigate replace to="/404"/>}/>
                    </Routes>

                </BrowserRouter>
                <Footer />
            </div>
        </div>
    )
}

export default App;