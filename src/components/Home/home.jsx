import './home.scss';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import React, { Component } from 'react';
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
                            {/* <img src={wf1} class="d-block mx-lg-auto img-fluid" alt="Jet" width="700" height="500" loading="lazy"/> */}
                        </div>
                        <div class="col-lg-6">
                            <h1 class="display-5 fw-bold lh-1 mb-3">Aviation Fuel Services for Airports and FBOs</h1>
                            <p class="lead">
                                Airports and FBOs trust World Fuel Management for reliable branded and unbranded fuel supply and brand programs that build their businesses.
                                <br/><br/>
                                We provide expert jet fuel solutions and services that encompass reliable 24/7 global aviation fuel supply, valuable brand and marketing programs, leading card rewards programs, expert logistics, technical services, training, and aviation software. 
                            </p>
                        </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}