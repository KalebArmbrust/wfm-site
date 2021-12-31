import React, { Component } from 'react';
import { Link, Outlet } from "react-router-dom";
import './header.scss';
import wflogo from "../../assets/images/wflogo.png"

export default class home extends Component {
    render() {
        return (
            <div>
                <header class="p-3 bg-dark text-white">
                    <div class="container">
                    <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <img src={wflogo} alt="logo" class="nav-link px-2 text-white nav col-12 col-lg-auto logo"/>
                        <ul class="header-links nav col-12 col-lg-auto mb-2 justify-content-center mb-md-0">
                            <Link class="link" to="/"><li><a href="#" class="nav-link px-2 text-secondary">Home</a></li></Link>
                            <Link class="link" to="/about"><li><a href="#" class="nav-link px-2 text-white">About</a></li></Link>
                            <Link class="link" to="/contact"><li><a href="#" class="nav-link px-2 text-white">Contact</a></li></Link>
                        </ul>
                        <Outlet />
                    </div>
                    </div>
                </header>
            </div>
        )
    }
}
