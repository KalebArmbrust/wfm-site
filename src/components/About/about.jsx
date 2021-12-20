import './about.scss';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import React, { Component } from 'react';
import wf2 from '../../assets/images/wf2.jpg';

export default class home extends Component {
    render() {
        return (
            <div>
                <Header />
                <div class="px-4 pt-5 my-5 text-center">
                    <h1 class="display-4 fw-bold">Centered screenshot</h1>
                    <div class="col-lg-6 mx-auto">
                    <p class="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                    </div>
                    <div class="overflow-hidden" style={{ maxHeight: '50vh' }}>
                    <div class="container px-5">
                        <img src={wf2} class="img-fluid border rounded-3 shadow-lg mb-4" alt="Airplane" width="700" height="500" loading="lazy"/>
                    </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
