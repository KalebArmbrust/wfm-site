import './about.scss';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import React, { Component } from 'react';
import wf2 from 'https://kalebarmbrust.github.io/wfm-site/src/assets/images/wf2.jpg';

export default class home extends Component {
    render() {
        return (
            <div>
                <Header />
                <div class="px-4 pt-5 my-5 text-center">
                    <h1 class="display-4 fw-bold">About Us</h1>
                    <div class="col-lg-6 mx-auto">
                    <p class="lead mb-4">
                        We are helping to meet growing global energy demand and limit CO2 emissions by producing more, cleaner-burning natural gas. Natural gas powers, heats and cools industries, homes and businesses. It fuels trucks and ships, as an alternative to diesel and heavy fuel oil. Plus, it goes into many everyday essentials.
                    </p>
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
