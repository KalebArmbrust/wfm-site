import './footer.scss';
import React, { Component } from 'react';
import { Link, Outlet } from "react-router-dom";

export default class home extends Component {
    render() {
        return (
            <div>
                <div class="footer">
                    <div class="container">
                        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                            <p class="col-md-4 mb-0 text-muted">&copy; 2021 World Fuel Management</p>
                            <ul class="nav col-md-4 justify-content-end">
                                <Link class="link" to="/"><li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Home</a></li></Link>
                                <Link class="link" to="/about"><li class="nav-item"><a href="#" class="nav-link px-2 text-muted">About</a></li></Link>
                                <Link class="link" to="/contact"><li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Contact</a></li></Link>
                            </ul>
                        </footer>
                    </div>
                </div>
            </div>
        )
    }
}