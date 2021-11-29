import './about.scss';
import React, { Component } from 'react';
import { Link, Outlet } from "react-router-dom";

export default class home extends Component {
    render() {
        return (
            <div>
                <nav>
                    <ul>
                        <li>
                        <Link to="/">Home</Link>
                        </li>
                        <li>
                        <Link to="/about">About</Link>
                        </li>
                    </ul>
                </nav>
                <Outlet />
            </div>
        )
    }
}
