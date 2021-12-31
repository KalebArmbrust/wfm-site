import './contact.scss';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import React, { Component } from 'react';
import wf3 from 'http://kalebarmbrust.github.io/wfm-site/src/assets/images/wf3.jpg';

export default class home extends Component {
    render() {
        return (
            <div>
                <Header />
                <div class="container my-5 contact">
                    <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                    <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
                        <h1 class="display-4 fw-bold lh-1">Need to get in touch?</h1>
                        <p class="lead fw-bold">
                            <br/>
                            You can contact our team by email for all of your inquiries.
                            <br/><br/>
                            Email: worlfuelmgmt@gmail.com
                        </p>
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
