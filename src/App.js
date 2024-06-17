import React from 'react';
import {Link} from "react-router-dom";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom"

import Catalog from './components/Catalog';
import Home from "./components/Home";
import Page404 from "./components/Page404";
import Breadcrumbs from "./components/Breadcrumbs";
import SideMenu from "./components/SideMenu";
import Footer from './components/Footer';
import { Button } from '@mui/material';

import Cart from './components/Cart';




function App() {
    

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
                            <Button><SideMenu/></Button>
                                   
                                
                                
                                
                            </label>
                            <a className=" header__link-site" href=" registration.html">
                                <img src=" img/reg.svg" alt=" reg"/>
                            </a>
                            <a className=" header__link-site" href="./Cart">
                                
                                    <img src=" img/cart.svg" alt=""/>
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
                        <Route path="/WOMEN" element={<div>WOMEN</div>}/>
                        <Route path="/KIDS" element={<div>KIDS</div>}/>
                        <Route path="/NEW ARRIVALS" element={<div>NEW ARRIVALS</div>}/>
                        
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