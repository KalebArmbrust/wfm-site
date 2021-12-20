import './contact.scss';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import React, { Component } from 'react';
import wf3 from '../../assets/images/wf3.jpg';

export default class home extends Component {
    render() {
        return (
            <div>
                <Header />
                <div class="container my-5 contact">
                    <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                    <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
                        <h1 class="display-4 fw-bold lh-1">Border hero with cropped image and shadows</h1>
                        <p class="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                    </div>
                    <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                        <img class="rounded-lg-3" src={wf3} alt="Jet" width="720" loading="lazy"/>
                    </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
