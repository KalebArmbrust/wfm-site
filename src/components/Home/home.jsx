import './home.scss';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import React, { Component } from 'react';
import { Link, Outlet } from "react-router-dom";
import wf1 from '../../assets/images/wf7.jpg';

export default class home extends Component {
    render() {
        return (
            <div>
                <Header />
                <div class="hero">
                    <div class="container col-xxl-8 px-4 py-5">
                        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
                        <div class="col-10 col-sm-8 col-lg-6">
                            <img src={wf1} class="d-block mx-lg-auto img-fluid" alt="Jet" width="700" height="500" loading="lazy"/>
                        </div>
                        <div class="col-lg-6">
                            <h1 class="display-5 fw-bold lh-1 mb-3">Responsive left-aligned hero with image</h1>
                            <p class="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                        </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}